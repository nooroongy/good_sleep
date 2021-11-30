import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../css/addsleepdata.css'
import { ACTION } from './store';
import { FB_DB } from './_firebase';

const AddSleepData = ({ addSleep, user ,callbaclFn}) => {
    const _today = new Date();
    const [step, setStep] = useState(0)
    const [sleepData, setSleepData] = useState({
        date: _today.getFullYear() + '' +(_today.getMonth()+1) + '' +_today.getDate(),
        sleepStart: '1203am',
        sleepEnd: "0701am",
        Rating: '3',
    })

    useEffect(() => {
        const contentEl = document.querySelector('.add-data-contents')
        contentEl.style.marginLeft = -250 * step + 'px'
    }, [step])

    const onBtnClick = e => {
        const direction = e.target.innerText;
        if (direction === 'prev') {
            if (step > 0)
                setStep(step - 1)
        } else {
            if (step < 4)
                setStep(step + 1)
            else {
                if (window.confirm('추가 하시겠습니까?')) {
                    FB_DB.add("sleep", {
                        ...sleepData,
                        uid: user.uid
                    }, (id) => {
                        addSleep({
                            ...sleepData,
                            uid: user.uid,
                            id: id
                        })
                    });
                    callbaclFn();
                    setStep(0)
                }
            }
        }
    }

    const onClickRating = (e) => {
        document.querySelectorAll('.add-data-step1-score').forEach(el => {
            el.classList.remove('add-data-step1-selected')
        })
        e.target.classList.add('add-data-step1-selected')
        setSleepData({ ...sleepData, rating: e.target.attributes.rating.value })
    }

    return <div className='add-data-wrap'>
        <div className='add-data-contents'>
            <div className='add-data-step1 font-color'>
                <div className='add-data-step1-text'>잘 주무셨나요? <br />일어났을 때 기분을 선택해주세요</div>
                <div className='add-data-step1-scores'>
                    <span className='add-data-step1-score font-icon' onClick={onClickRating} rating='1'>sick</span>
                    <span className='add-data-step1-score font-icon' onClick={onClickRating} rating='2'>mood_bad</span>
                    <span className='add-data-step1-score font-icon add-data-step1-selected' onClick={onClickRating} rating='3'>sentiment_satisfied</span>
                    <span className='add-data-step1-score font-icon' onClick={onClickRating} rating='4'>mood</span>
                    <span className='add-data-step1-score font-icon' onClick={onClickRating} rating='5'>emoji_emotions</span>
                </div>
            </div>
            <div className='add-data-step2'></div>
            <div className='add-data-step3'></div>
            <div className='add-data-step4'></div>
            <div className='add-data-step5'></div>
        </div>
        <div className='add-data-btn-wrap'>
            <button className='add-data-btn sub-color font-color' onClick={onBtnClick}>prev</button>
            <button className='add-data-btn sub-color font-color' onClick={onBtnClick}>{step === 4 ? 'done' : 'next'}</button>
        </div>
    </div>
}

function mapStateToProps(state) {
    const { user } = state;
    return { user }
}

function mapDispatchProps(dispatch) {
    return {
        addSleep: (id) => dispatch(ACTION.addSleep(id)),
    }
}

export default connect(mapStateToProps, mapDispatchProps)(AddSleepData);