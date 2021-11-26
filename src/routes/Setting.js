import Pallet from '../components/Pallet'
import '../css/setting.css'

const Setting = () => {
    const noSet = [
        '01','02','03','04',
        '05','06','07','08']

    return<div className='setting-wrap'>
        theme<br/>
        main
        <Pallet category={'main'} noSet={noSet}></Pallet>
        sub
        <Pallet category={'sub'} noSet={noSet}></Pallet>
        font
        <Pallet category={'font'} noSet={noSet}></Pallet>
    </div>
}

export default Setting;