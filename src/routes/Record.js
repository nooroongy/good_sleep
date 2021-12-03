import {useState } from "react";
import { connect } from "react-redux";
import AddSleepData from "../components/AddSleepData";
import Popup from "../components/Popup";
import SleepCard from "../components/SleepCard";
import '../css/record.css'

const Record = ({ sleepData }) => {
    const [isAddPopOpend, setIsAddPopOpend] = useState(false)
    const [isEditPopOpend, setIsEditPopOpend] = useState(false)
    const [editId, setEditId] = useState('')

    const onAddBtnClick = () => {
        setIsAddPopOpend(true)
    }
    const onEditBtnClick = (id) => {
        setEditId(id)
        setIsEditPopOpend(true)
    }
    const onCloseBtnClick = () => {
        setIsAddPopOpend(false)
        setIsEditPopOpend(false)
    }

    return <div className='record-wrap'>
        <SleepCard id={'new'} addBtnClick={onAddBtnClick} />
        {sleepData.map((data, i) => <SleepCard id={data.id} key={data.id} editBtnClick={onEditBtnClick} />)}
        <Popup
            isOpend={isAddPopOpend}
            clossBtnClick={onCloseBtnClick}
            title={'Add new sleep data'}>
            <AddSleepData callbaclFn={onCloseBtnClick} isNew={true} />
        </Popup>
        <Popup
            isOpend={isEditPopOpend}
            clossBtnClick={onCloseBtnClick}
            title={'Edit sleep data'}>
            <AddSleepData callbaclFn={onCloseBtnClick} isNew={false} editId={editId} />
        </Popup>
    </div>
}

function mapStateToProps(state) {
    const { sleepData } = state;
    return { sleepData }
}

export default connect(mapStateToProps)(Record);