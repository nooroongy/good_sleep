import { connect } from "react-redux";
import '../css/sleepcard.css'

function SleepCard({sleepData,id}){
    const sleepObj = sleepData.filter(data=>data.id === id)[0]
    return <div className='sleepcard-wrap'>
        <span>잠든시간:{sleepObj.sleepStart}</span>
        <span>일어난시간:{sleepObj.sleepEnd}</span>
        
    </div>
}

function mapStateToProps(state,props){
    const { sleepData } = state;
    return {sleepData}
}

export default connect(mapStateToProps)(SleepCard);