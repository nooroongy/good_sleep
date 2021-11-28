import { useEffect, useState } from "react";
import { connect } from "react-redux";
import SleepCard from "../components/SleepCard";
import '../css/record.css'

const Record = ({sleepData}) => {
    console.log(sleepData)

    return<div className='record-wrap'>
        <SleepCard id={'new'}/>
        {sleepData.map((data,i) => <SleepCard id={data.id} key ={data.id}/>)}
    </div>
}

function mapStateToProps(state){
    const {sleepData} = state;
    return {sleepData}
}

export default connect(mapStateToProps)(Record);