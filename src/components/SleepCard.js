import { useState } from "react";
import { connect } from "react-redux";
import '../css/sleepcard.css'
import { ACTION } from "./store";
import { FB_DB } from "./_firebase";

function SleepCard({ sleepData, id, removeSleep, addSleep,user,addBtnClick ,editBtnClick}) {
    const [isDeleted, setIsDeleted] = useState(false);
    const sleepObj = sleepData.filter(data => data.id === id)[0]
    const date = `${sleepObj.date.substr(0, 4)}/${sleepObj.date.substr(4, 2)}/${sleepObj.date.substr(6, 2)}`
    const emoji = getEmozi(sleepObj.rating);
    const sleepTime = getSleepTime(sleepObj.sleepStart,sleepObj.sleepEnd)
    function getEmozi(rating){
        switch(rating){
            case '1' : return 'sick';
            case '2' : return 'mood_bad';
            case '3' : return 'sentiment_satisfied';
            case '4' : return 'mood';
            case '5' : return 'emoji_emotions';
            default :return;
        }
    }

    function getSleepTime(time1,time2){
        const h1 = time1.substr(0,2)*1;
        const m1 = time1.substr(2,2)*1;
        const h2 = time2.substr(0,2)*1;
        const m2 = time2.substr(2,2)*1;

       let diffH = h1> h2 ? 24+h2-h1 : h2-h1;
       let diffM = m2-m1;

       if(diffM <0){
            diffM += 60;
           diffH--;
       }

       return diffH +'시간 '+diffM+'분'
    }

    function deleteBtnClick() {
        if (window.confirm('정말 삭제하시겠습니까?')) {
            console.log(sleepObj.id)
            FB_DB.delete('sleep', sleepObj.id)
            setIsDeleted(true)
            setTimeout(() => {
                removeSleep(sleepObj.id);
            }, 500);
        }
    }

    function onEditBtnClick(){
        editBtnClick(id);
    }

    function onAddBtnClick() {
        addBtnClick()
    }

    return <div className={'sub-color sleepcard-wrap ' + (isDeleted ? 'deleted' : '')}>
        {id !== 'new' ? <div className='sleepcard-old-wrap'>
            <div className='sleepcard-header sub-color font-color '>
                <span className='sleepcard-date'>{date}</span>
            </div>
            <div className='sleepcard-body theme-color'>
                <span className='sleepcard-data'>
                    <span className='sleepcard-emoji font-icon  main-color'>{emoji}</span>
                    <span className='sleepcard-tx main-color'>{sleepTime}</span>
                </span>
                <span className='sleepcard-icon font-icon main-color' onClick={onEditBtnClick}>edit</span>
                <span className='sleepcard-icon font-icon main-color' onClick={deleteBtnClick}>delete_forever</span>
            </div>
        </div>
            : <>
                <div className='sleepcard-new-wrap sub-color font-color '>
                    <span className='sleepcard-plus-btn' onClick={onAddBtnClick}>add</span>
                </div>
            </>
        }

    </div>
}

function mapStateToProps(state, props) {
    const { sleepData,user } = state;
    return {
        sleepData: [
            ...sleepData,
            {
                Rating: "",
                date: "",
                id: "new",
                sleepEnd: "",
                sleepStart: "",
                uid: "",
            }
        ],
        user
    }
}

function mapDispatchProps(dispatch) {
    return {
        removeSleep: (id) => dispatch(ACTION.removeSleep(id)),
        addSleep: (id) => dispatch(ACTION.addSleep(id)),
    }
}
export default connect(mapStateToProps, mapDispatchProps)(SleepCard);