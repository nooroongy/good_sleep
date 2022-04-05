import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../css/addsleepdata.css'
import NumberSlide from './NumberSlide';
import { ACTION } from './store';
import TimeSet from './TimeSet';
import { FB_DB } from './_firebase';

const AddSleepData = ({ addSleep, user, callbaclFn, isNew, editId, sleepObj, setSleep, sleepData }) => {
    const [sleepTime, setSleepTime] = useState();
    const [wakeUpTime, setWakeUpTime] = useState();
    const onChangeSleepTime = (time) => { setSleepTime(time) }
    const onChangeWakeUpTime = (time) => { setWakeUpTime(time) }

    const [date, setDate] = useState();
    const [step, setStep] = useState(0)
    const [sleepInfo, setSleepInfo] = useState({ rating: '3' })

    //처음 오픈시 오늘 날짜 설정
    useEffect(() => {
        const today = new Date();
        setDate(today.getFullYear() + '' + addZero(today.getMonth() + 1) + '' + addZero(today.getDate()))
    }, [])

    //수정할 데이터가 변경시 초기값 세팅
    useEffect(() => {
        if (sleepObj !== undefined) {
            const { sleepStart, sleepEnd, date, rating } = sleepObj;
            setSleepTime(sleepStart)
            setWakeUpTime(sleepEnd)
            setDate(date);
            setSleepInfo(prev => { return { ...prev, rating } })
            setStep(0)
            document.querySelectorAll('.add-data-step1-score').forEach(el => {
                el.classList.remove('add-data-step1-selected', 'main-color')
                if (el.attributes.rating.value === sleepObj.rating) {
                    el.classList.add('add-data-step1-selected', 'main-color')
                }
            })
        }
    }, [sleepObj])

    // step이 바뀔때마다 초기값 세팅
    useEffect(() => {
        const contentEl = isNew ?
            document.querySelector('.add-data-new .add-data-contents') :
            document.querySelector('.add-data-edit .add-data-contents')
        contentEl.style.marginLeft = -250 * step + 'px'
        setSleepInfo(prev => {
            return {
                ...prev,
                sleepStart: (sleepTime),
                sleepEnd: (wakeUpTime),
                date
            }
        })
    }, [step, isNew])

    // 이전,다음 버튼 누를 때마다 세팅
    const onBtnClick = e => {
        const direction = e.target.innerText;
        if (direction === 'prev' && step > 0) {
            setStep(step - 1)
        } else {
            if (step < 3)
                setStep(step + 1)
            else {
                if (isNew) {
                    addSleepData()
                } else {
                    modifySleepData()
                }
            }
        }
    }

    const addSleepData = () => {
        const { uid } = user;
        const newSleepData = { ...sleepInfo, uid }

        const addToSore = (id) => {
            addSleep({ ...sleepInfo, uid, id })
        }

        if (window.confirm('추가 하시겠습니까?')) {
            FB_DB.add("sleep", newSleepData, addToSore);
            callbaclFn();
            setStep(0)
            setSleepInfo({
                date,
                sleepStart: '1203am',
                sleepEnd: "0701am",
                rating: '3',
            })
        }
    }

    const modifySleepData = () => {
        const { uid } = user;
        const newSleepData = { ...sleepInfo, uid }

        const addToSore = () => {
            setSleep(sleepData.map(v => {
                return v.id === editId ? { ...sleepInfo, id: editId } : v;
            }))
        }

        if (window.confirm('수정 하시겠습니까?')) {
            FB_DB.update("sleep", sleepObj.id, newSleepData, addToSore)
            callbaclFn();
        }
    }

    const onClickRating = (e) => {
        document.querySelectorAll('.add-data-step1-score').forEach(el => {
            el.classList.remove('add-data-step1-selected', 'main-color')
        })
        e.target.classList.add('add-data-step1-selected', 'main-color')
        setSleepInfo({ ...sleepInfo, rating: e.target.attributes.rating.value })
    }

    return <div className={'add-data-wrap ' + (isNew ? 'add-data-new' : 'add-data-edit')}>
        <div className='add-data-contents font-color'>
            <div className='add-data-step1'>
                <div className='add-data-step-text main-color'>잘 주무셨나요? <br />일어났을 때 기분을 선택해주세요</div>
                <div className='add-data-step1-scores'>
                    <span className='add-data-step1-score font-icon' onClick={onClickRating} rating='1'>sick</span>
                    <span className='add-data-step1-score font-icon' onClick={onClickRating} rating='2'>mood_bad</span>
                    <span className='add-data-step1-score font-icon add-data-step1-selected main-color' onClick={onClickRating} rating='3'>sentiment_satisfied</span>
                    <span className='add-data-step1-score font-icon' onClick={onClickRating} rating='4'>mood</span>
                    <span className='add-data-step1-score font-icon' onClick={onClickRating} rating='5'>emoji_emotions</span>
                </div>
            </div>
            <div className='add-data-step2'>
                <div className='add-data-step-text main-color'>몇시에 주무셨나요? <br />주무신 시간을 알려주세요</div>
                <div className='add-data-step2-time'>
                    <TimeSet time={sleepTime} onChange={onChangeSleepTime}></TimeSet>
                </div>
            </div>
            <div className='add-data-step3'>
                <div className='add-data-step-text main-color'>몇시에 일어나셨나요? <br />일어난 시간을 알려주세요</div>
                <div className='add-data-step3-time'>
                    <TimeSet time={wakeUpTime} onChange={onChangeWakeUpTime}></TimeSet>
                </div>
            </div>
            <div className='add-data-step5'>
                <div className='add-data-step-text main-color'>{isNew ? '등록' : '수정'}을 완료하시려면 <br />done 버튼을 클릭해주세요</div>
            </div>
        </div>
        <div className='add-data-btn-wrap'>
            <button className='add-data-btn sub-color font-color' onClick={onBtnClick}>prev</button>
            <button className={'add-data-btn font-color ' + (step === 3 ? 'main-color' : 'sub-color')} onClick={onBtnClick}>{step === 3 ? 'done' : 'next'}</button>
        </div>
    </div>
}

const addZero = num => (num < 10 && num * 1 !== 0) ? '0' + num : num

function mapStateToProps(state, props) {
    const { editId } = props
    const { user, sleepData } = state;
    const sleepObj = sleepData.filter(v => v.id === editId)[0]
    return { user, sleepObj, sleepData }
}

function mapDispatchProps(dispatch) {
    return {
        addSleep: (id) => dispatch(ACTION.addSleep(id)),
        setSleep: (id) => dispatch(ACTION.setSleep(id)),
    }
}

export default connect(mapStateToProps, mapDispatchProps)(AddSleepData);