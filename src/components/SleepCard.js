import { useState } from "react";
import { connect } from "react-redux";
import '../css/sleepcard.css'
import { ACTION } from "./store";
import { FB_DB } from "./_firebase";

function SleepCard({ sleepData, id, removeSleep, addSleep,user,addBtnClick }) {
    const sleepObj = sleepData.filter(data => data.id === id)[0]
    const date = `${sleepObj.date.substr(0, 4)}/${sleepObj.date.substr(4, 2)}/${sleepObj.date.substr(6, 2)}`
    const [isDeleted, setIsDeleted] = useState(false);

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

    function onAddBtnClick() {
        addBtnClick()
    }

    return <div className={'sub-color sleepcard-wrap font-color ' + (isDeleted ? 'deleted' : '')}>
        {id !== 'new' ? <div className='sleepcard-old-wrap'>
            <div className='sleepcard-header sub-color'>
                <span className='sleepcard-date'>{date}</span>
            </div>
            <div className='sleepcard-body theme-color'>
                <span className='sleepcard-data main-color'>{sleepObj.id}</span>
                <span className='sleepcard-icon font-icon main-color' onClick={deleteBtnClick}>edit</span>
                <span className='sleepcard-icon font-icon main-color' onClick={deleteBtnClick}>delete_forever</span>
            </div>
        </div>
            : <>
                <div className='sleepcard-new-wrap sub-color'>
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