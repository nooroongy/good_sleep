import { useEffect, useState } from "react";
import { connect } from "react-redux";
import AddSleepData from "../components/AddSleepData";
import Popup from "../components/Popup";
import SleepCard from "../components/SleepCard";
import '../css/record.css'

const Record = ({ sleepData }) => {
    const [isAddPopOpend, setIsAddPopOpend] = useState(false)

    const onAddBtnClick = () => {
        setIsAddPopOpend(true)
    }
    const onCloseBtnClick = () => {
        setIsAddPopOpend(false)
    }

    return <div className='record-wrap'>
        <SleepCard id={'new'} addBtnClick={onAddBtnClick} />
        {sleepData.map((data, i) => <SleepCard id={data.id} key={data.id} />)}
        <Popup
            isOpend={isAddPopOpend}
            clossBtnClick={onCloseBtnClick}
            title={'Add new sleep data'}>
                <AddSleepData callbaclFn={onCloseBtnClick}/>

        </Popup>
    </div>
}

function mapStateToProps(state) {
    const { sleepData } = state;
    return { sleepData }
}

export default connect(mapStateToProps)(Record);