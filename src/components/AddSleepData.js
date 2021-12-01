import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../css/addsleepdata.css'
import { ACTION } from './store';
import { FB_DB } from './_firebase';

const AddSleepData = ({ addSleep, user, callbaclFn }) => {
    const _today = new Date();
    const [step, setStep] = useState(0)
    const [sleepData, setSleepData] = useState({
        date: _today.getFullYear() + '' + (_today.getMonth() + 1) + '' + _today.getDate(),
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
            if (step < 3)
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
            el.classList.remove('add-data-step1-selected', 'main-color')
        })
        e.target.classList.add('add-data-step1-selected', 'main-color')
        setSleepData({ ...sleepData, rating: e.target.attributes.rating.value })
    }

    return <div className='add-data-wrap'>
        <div className='add-data-contents font-color'>
            <div className='add-data-step1'>
                <div className='add-data-step-text'>잘 주무셨나요? <br />일어났을 때 기분을 선택해주세요</div>
                <div className='add-data-step1-scores'>
                    <span className='add-data-step1-score font-icon' onClick={onClickRating}>sick</span>
                    <span className='add-data-step1-score font-icon' onClick={onClickRating} rating='2'>mood_bad</span>
                    <span className='add-data-step1-score font-icon add-data-step1-selected main-color' onClick={onClickRating} rating='3'>sentiment_satisfied</span>
                    <span className='add-data-step1-score font-icon' onClick={onClickRating} rating='4'>mood</span>
                    <span className='add-data-step1-score font-icon' onClick={onClickRating} rating='5'>emoji_emotions</span>
                </div>
            </div>
            <div className='add-data-step2'>
                <div className='add-data-step-text'>몇시에 주무셨나요? <br />주무신 시간을 알려주세요</div>
                <div className='add-data-step2-time'>
                    <span className='add-data-step2-h main-color' >12</span><span className='add-data-step2-tx' >시</span>
                    <span className='add-data-step2-m main-color' >30</span><span className='add-data-step2-tx' >분</span>
                </div>
            </div>
            <div className='add-data-step3'>
            <div className='add-data-step-text'>몇시에 일어나나요? <br />일어난 시간을 알려주세요</div>
                <div className='add-data-step3-time'>
                    <span className='add-data-step3-h main-color' >12</span><span className='add-data-step3-tx' >시</span>
                    <span className='add-data-step3-m main-color' >30</span><span className='add-data-step3-tx' >분</span>
                </div>
            </div>
            <div className='add-data-step4'>
                <div className='add-data-step-text'>등록을 완료하시려면 <br/>done 버튼을 클릭해주세요</div>
            </div>
        </div>
        <div className='add-data-btn-wrap'>
            <button className='add-data-btn sub-color font-color' onClick={onBtnClick}>prev</button>
            <button className={'add-data-btn font-color ' + (step ===3 ? 'main-color' : 'sub-color')} onClick={onBtnClick}>{step === 3 ? 'done' : 'next'}</button>
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