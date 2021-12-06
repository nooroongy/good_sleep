import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../css/addsleepdata.css'
import { ACTION } from './store';
import { FB_DB } from './_firebase';

const AddSleepData = ({ addSleep, user, callbaclFn, isNew, editId, sleepObj, setSleep, _sleepData }) => {
    const _today = new Date();
    const step2HourInput = useInput(23);
    const step2MinuteInput = useInput(30);
    const step3HourInput = useInput('07');
    const step3MinuteInput = useInput('00');
    const step4YearInput = useInput(_today.getFullYear() + '-' + addZero(_today.getMonth() + 1) + '-' + addZero(_today.getDate()));
    const [step, setStep] = useState(0)
    const [sleepData, setSleepData] = useState({ rating: 3 })

    //수정할 데이터가 변경시 초기값 세팅
    useEffect(() => {
        if (sleepObj) {
            step2HourInput.setValue(sleepObj.sleepStart.substr(0, 2));
            step2MinuteInput.setValue(sleepObj.sleepStart.substr(2, 2));
            step3HourInput.setValue(sleepObj.sleepEnd.substr(0, 2));
            step3MinuteInput.setValue(sleepObj.sleepEnd.substr(2, 2));
            step4YearInput.setValue(sleepObj.date.substr(0, 4) + '-' + sleepObj.date.substr(4, 2) + '-' + sleepObj.date.substr(6, 2));
            setSleepData(prev => { return { ...prev, rating: sleepObj.rating } })
            // setSleepData({ ...sleepData, rating: sleepObj.rating })
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
        setSleepData(prev=>{
            console.log(prev)
            return {
                ...prev,
                sleepStart: step2HourInput.value + '' + step2MinuteInput.value,
                sleepEnd: step3HourInput.value + '' + step3MinuteInput.value,
                date: step4YearInput.value.replaceAll('-', '')
            }
        })
    }, [step, isNew ,step2HourInput.value,step2MinuteInput.value,step3HourInput.value,step3MinuteInput.value,step4YearInput.value])

    // 이전,다음 버튼 누를 때마다 세팅
    const onBtnClick = e => {
        const direction = e.target.innerText;
        if (direction === 'prev') {
            if (step > 0)
                setStep(step - 1)
        } else {
            if (step < 4)
                setStep(step + 1)
            else {
                if (isNew) {
                    // if(_sleepData.filter(v=>v.date === sleepData.date).length != 0){
                    //     window.alert('해당 날자에 이미 데이터가 존재합니다.')
                    // }
                    // else 
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
                            rating: '3',
                        })
                    }
                } else {
                    if (window.confirm('수정 하시겠습니까?')) {
                        FB_DB.update("sleep", sleepObj.id, {
                            ...sleepData,
                            uid: user.uid
                        }, () => {
                            setSleep(_sleepData.map(v => {
                                return v.id === editId ? { ...sleepData, id: editId } : v;
                            }))
                        })
                        callbaclFn();
                    }
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
                    <input className='add-data-step2-h' onChange={step2HourInput.onChange} value={step2HourInput.value} datatype='hour' /><span className='add-data-step2-tx main-color' >시</span>
                    <input className='add-data-step2-m' onChange={step2MinuteInput.onChange} value={step2MinuteInput.value} datatype='minute' /><span className='add-data-step2-tx main-color' >분</span>
                </div>
            </div>
            <div className='add-data-step3'>
                <div className='add-data-step-text main-color'>몇시에 일어나셨나요? <br />일어난 시간을 알려주세요</div>
                <div className='add-data-step3-time'>
                    <input className='add-data-step3-h' onChange={step3HourInput.onChange} value={step3HourInput.value} datatype='hour' /><span className='add-data-step3-tx main-color' >시</span>
                    <input className='add-data-step3-m' onChange={step3MinuteInput.onChange} value={step3MinuteInput.value} datatype='minute' /><span className='add-data-step3-tx main-color' >분</span>
                </div>
            </div>
            <div className='add-data-step4'>
                <div className='add-data-step-text main-color'>오늘이 맞나요?? <br />마지막으로 날짜를 확인해주세요</div>
                <div className='add-data-step4-date'>
                    <input className='add-data-step4-year main-color' onChange={step4YearInput.onChange} value={step4YearInput.value} datatype='year' />
                </div>
            </div>
            <div className='add-data-step5'>
                <div className='add-data-step-text main-color'>{isNew ? '등록' : '수정'}을 완료하시려면 <br />done 버튼을 클릭해주세요</div>
            </div>
        </div>
        <div className='add-data-btn-wrap'>
            <button className='add-data-btn sub-color font-color' onClick={onBtnClick}>prev</button>
            <button className={'add-data-btn font-color ' + (step === 4 ? 'main-color' : 'sub-color')} onClick={onBtnClick}>{step === 4 ? 'done' : 'next'}</button>
        </div>
    </div>
}

const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    const onChange = e => {
        const { target: { value } } = e;
        const { target: { attributes: { datatype } } } = e;

        if (datatype.value === 'hour' || datatype.value === 'minute') {
            if (isNaN(value * 1)) return;
            if (value.length > 2) return;
            if ((datatype.value === 'hour' && value * 1 > 24) || (datatype.value === 'minute' && value * 1 > 60)) return;
            setValue(value)
        }
        if (datatype.value === 'year') {
            const year = value.substr(0, 4) * 1;
            const month = value.substr(5, 2) * 1;
            const date = value.substr(8,) * 1;
            if (year !== new Date().getFullYear() * 1) return;
            if (month !== (new Date().getMonth() + 1) * 1) return;

            function dateCheck(date) {
                if ([1, 3, 5, 7, 8, 10, 12].indexOf(month) !== -1 && date < 32) return true;
                if ([4, 6, 9, 11].indexOf(month) !== -1 && date < 31) return true;
                if (month === 2 && date < 29) return true;
                return false;
            }
            if (value.length > 7 && dateCheck(date)) setValue(value)
        }
    }
    return { onChange, value, setValue }
}

const addZero = num => (num < 10 && num * 1 !== 0) ? '0' + num : num

function mapStateToProps(state, props) {
    const { editId } = props
    const { user, sleepData } = state;
    const sleepObj = sleepData.filter(v => v.id === editId)[0]
    const _sleepData = sleepData;
    return { user, sleepObj, _sleepData }
}

function mapDispatchProps(dispatch) {
    return {
        addSleep: (id) => dispatch(ACTION.addSleep(id)),
        setSleep: (id) => dispatch(ACTION.setSleep(id)),
    }
}

export default connect(mapStateToProps, mapDispatchProps)(AddSleepData);