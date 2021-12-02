import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../css/addsleepdata.css'
import { ACTION } from './store';
import { FB_DB } from './_firebase';

const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    const onChange = e => {
        const { target: { value } } = e;
        const { target: { attributes: { datatype } } } = e;

        if (datatype.value === 'hour' || datatype.value === 'minute') {
            if (isNaN(value * 1)) return;
            if (value.length > 2) return;
            if (datatype.value === 'hour' && value * 1 > 24 || datatype.value === 'minute' && value * 1 > 60) return;
            setValue(value)
        }
        if (datatype.value === 'year') {
            const _val = value.replace('-','')
            const year = _val.substr(0, 4);
            const month = _val.substr(4, 2);
            const date = _val.substr(6, 2);

            console.log(_val)
            if(value.length <5) setValue(year)
            else if(value.length <7)setValue(year + '-' + addZero(month))
        }

    }
    return { onChange, value }
}

const addZero = num => (num <10 && num*1 !== 0) ? '0'+ num : num

const AddSleepData = ({ addSleep, user, callbaclFn }) => {
    const _today = new Date();
    const step2HourInput = useInput(23);
    const step2MinuteInput = useInput(30);
    const step3HourInput = useInput(23);
    const step3MinuteInput = useInput(30);
    const step4YearInput = useInput(_today.getFullYear() + '-' + addZero(_today.getMonth() + 1) + '-' + addZero(_today.getDate()));
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
                    setSleepData({
                        date: _today.getFullYear() + '' + (_today.getMonth() + 1) + '' + _today.getDate(),
                        sleepStart: '1203am',
                        sleepEnd: "0701am",
                        Rating: '3',
                    })
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
                    <input className='add-data-step2-h main-color' {...step2HourInput} datatype='hour' /><span className='add-data-step2-tx main-color' >시</span>
                    <input className='add-data-step2-m main-color' {...step2MinuteInput} datatype='minute' /><span className='add-data-step2-tx main-color' >분</span>
                </div>
            </div>
            <div className='add-data-step3'>
                <div className='add-data-step-text main-color'>몇시에 일어나셨나요? <br />일어난 시간을 알려주세요</div>
                <div className='add-data-step3-time'>
                    <input className='add-data-step3-h main-color' {...step3HourInput} datatype='hour' /><span className='add-data-step3-tx main-color' >시</span>
                    <input className='add-data-step3-m main-color' {...step3MinuteInput} datatype='minute' /><span className='add-data-step3-tx main-color' >분</span>
                </div>
            </div>
            <div className='add-data-step4'>
                <div className='add-data-step-text main-color'>오늘이 맞나요?? <br />마지막으로 날짜를 확인해주세요</div>
                <div className='add-data-step4-date'>
                    <input className='add-data-step4-year main-color'  {...step4YearInput} datatype='year' />
                </div>
            </div>
            <div className='add-data-step5'>
                <div className='add-data-step-text main-color'>등록을 완료하시려면 <br />done 버튼을 클릭해주세요</div>
            </div>
        </div>
        <div className='add-data-btn-wrap'>
            <button className='add-data-btn sub-color font-color' onClick={onBtnClick}>prev</button>
            <button className={'add-data-btn font-color ' + (step === 4 ? 'main-color' : 'sub-color')} onClick={onBtnClick}>{step === 4 ? 'done' : 'next'}</button>
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