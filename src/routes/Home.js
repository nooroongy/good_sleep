import { connect } from "react-redux";
import Card from "../components/Card";
import { ACTION } from "../components/store";
import { FB_DB } from "../components/_firebase";
import '../css/home.css'

const Home = ({ user, sleepData = [], connectSleepDB }) => {
    
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

       return diffH*60 +diffM
    }

    return (<div className='home-wrap'>
        <Card title={'graph'}>
            <div className='home-graph-wrap'>
                {sleepData.map(v => {
                    const height = (getSleepTime(v.sleepStart,v.sleepEnd))/4;
                    return <span className='home-graph-data'>
                        <span className={'home-graph-bar home-graph-rating'+v.rating+' home-graph-sleeptime sub-color'} 
                        style={{height:height > 128 ? 128 : height+'px'}}>
                        </span>
                        <span className='home-graph-date'>{v.date}</span>
                    </span>
                })}
            </div>

        </Card>

        <Card title={'for you'}>
            <div className='home-for-you-wrap'>
                <span className='home-for-you-hour-wrap'>
                    <span className='home-for-you-hour'>7</span>
                    {/* <span className='home-for-you-hour-tx'>.</span>
                    <span className='home-for-you-hour2'>5</span> */}
                    <span className='home-for-you-hour-tx'>h</span>
                    <span className='home-for-you-hour-text'>추천 수면시간</span>
                </span>
                <span className='home-for-you-data'>4시간이상 주무시는것을 추천드립니다.</span>
                <span className='home-for-you-data'>2시 전에는 주무시는게 좋습니다</span>
                <span className='home-for-you-base'>123일간의 데이터를 기반으로 추천</span>

            </div>
        </Card>

        <Card title={'today'}>
            <button  className='home-add-btn font-icon'>add</button>
        </Card>

        <Card title={'tips'}>
            <div className='home-tips'>
                알고 계셨나요? 우리의 수면은 처음 90분이 가장 중요하다는 사실<br />
                잠에들고 처음으로 맞이하는 깊은수면의 질에 따라 나머지 수면의 질도 변한다고 합니다.
            </div>
        </Card>

        <Card title={'tips'}>
            <div className='home-tips'>
                알고 계셨나요? 우리의 수면은 처음 90분이 가장 중요하다는 사실<br />
                잠에들고 처음으로 맞이하는 깊은수면의 질에 따라 나머지 수면의 질도 변한다고 합니다.
            </div>
        </Card>

        <Card title={'tips'}>
            <div className='home-tips'>
                알고 계셨나요? 우리의 수면은 처음 90분이 가장 중요하다는 사실<br />
                잠에들고 처음으로 맞이하는 깊은수면의 질에 따라 나머지 수면의 질도 변한다고 합니다.
            </div>
        </Card>

        <Card title={'tips'}>
            <div className='home-tips'>
                알고 계셨나요? 우리의 수면은 처음 90분이 가장 중요하다는 사실<br />
                잠에들고 처음으로 맞이하는 깊은수면의 질에 따라 나머지 수면의 질도 변한다고 합니다.
            </div>
        </Card>

        <Card title={'tips'}>
            <div className='home-tips'>
                알고 계셨나요? 우리의 수면은 처음 90분이 가장 중요하다는 사실<br />
                잠에들고 처음으로 맞이하는 깊은수면의 질에 따라 나머지 수면의 질도 변한다고 합니다.
            </div>
        </Card>

    </div>)
}

function mapStatetoProps(state, props) {
    const { user, sleepData } = state;
    return { user, sleepData }
}

function mapDispatchProps(dispatch) {
    return {
        connectSleepDB: (user) => dispatch(ACTION.setSleep(user)),
    }
}

export default connect(mapStatetoProps, mapDispatchProps)(Home);