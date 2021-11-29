import { connect } from 'react-redux'
import Pallet from '../components/Pallet'
import { FB_DB } from '../components/_firebase'
import '../css/setting.css'
import Card from '../components/Card'

const Setting = ({ updateColorSet, colorSet }) => {
    const saveSetting = () => {
        saveTheme()
    }

    const saveTheme = () => {
        updateColorSet('colorSet', colorSet.id, colorSet)
    }

    const noSet = {
        main: ['01', '02', '03', '04',
            '05', '06', '07', '08'],
        sub: ['01', '02', '03', '04',
            '05', '06', '07', '08'],
        theme: ['01', '02', '03', '04'],
        font: ['01', '02', '03', '04']
    }

    return <div className='setting-wrap'>
        <Card title={'Color'}>
            <div className='setting-pallet-category'>main</div>
            <Pallet category={'main'} noSet={noSet.main}></Pallet>
            <div className='setting-pallet-category'>sub</div>
            <Pallet category={'sub'} noSet={noSet.sub}></Pallet>
            <div className='setting-pallet-category'>theme</div>
            <Pallet category={'theme'} noSet={noSet.theme}></Pallet>
            <div className='setting-pallet-category'>font</div>
            <Pallet category={'font'} noSet={noSet.font}></Pallet>
        </Card>
        <button onClick={saveSetting} className='setting-save-btn main-color font-color'>save</button>
    </div>
}

function mapStateToProps(state) {
    const { colorSet } = state;
    return { colorSet }
}

function mapDispatchProps() {
    return { updateColorSet: (name, id, data) => { FB_DB.update(name, id, data) } }
}

export default connect(mapStateToProps, mapDispatchProps)(Setting);