import { connect } from 'react-redux'
import Pallet from '../components/Pallet'
import { FB_DB } from '../components/_firebase'
import '../css/setting.css'

const Setting = ({upDateTheme,theme}) => {
    const saveSetting = () => {
        saveTheme()
    }

    const saveTheme = () =>{
        upDateTheme('theme',theme.id,theme)
    }

    const noSet = {
        main: ['01', '02', '03', '04',
            '05', '06', '07', '08'],
        sub: ['01', '02', '03', '04',
            '05', '06', '07', '08'],
        font: ['01', '02', '03', '04']
    }

    return <div className='setting-wrap'>
        <div className='setting-title'>theme</div>
        <div className='setting-pallet-wrap'>
            <div className='setting-pallet-category'>main</div>
            <Pallet category={'main'} noSet={noSet.main}></Pallet>
            <div className='setting-pallet-category'>sub</div>
            <Pallet category={'sub'} noSet={noSet.sub}></Pallet>
            <div className='setting-pallet-category'>font</div>
            <Pallet category={'font'} noSet={noSet.font}></Pallet>
        </div>
        <button onClick={saveSetting} className='setting-save-btn main-color'>save</button>
    </div>
}

function mapStateToProps(state){
    const {theme} = state;
    return {theme}
}

function mapDispatchProps(){
    return {upDateTheme:(name,id,data)=>{FB_DB.update(name,id,data)}}
}

export default connect(mapStateToProps,mapDispatchProps)(Setting);