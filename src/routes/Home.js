import { connect } from "react-redux";
import Card from "../components/Card";
import SleepCard from "../components/SleepCard";
import { ACTION } from "../components/store";
import { FB_DB } from "../components/_firebase";
import '../css/home.css'

const Home = ({ user, sleepData = [], connectSleepDB }) => {
    function dbTest() {
        FB_DB.add("sleep", {
            date: '20211125',
            sleepStart: '1203am',
            sleepEnd: "0701am",
            Rating: '8',
            uid: user.uid
        });

        FB_DB.get('sleep').then(res => {
            connectSleepDB(res.filter(data => data.uid === user.uid))
        })
    }

    return (<div className='home-wrap'>
        <Card title={'for you'}>
            <div className='home-for-you-wrap'>
            <span className='home-for-you-hour-wrap'>
                <span className='home-for-you-hour'>8</span>
                <span className='home-for-you-hour-h'>h</span>
                </span>
                <span className='home-for-you-data'>4시간이상 주무시는것을 추천드립니다.</span>
                <span className='home-for-you-data'>2시 전에는 주무시는게 좋습니다</span>
                <span className='home-for-you-base'>123일간의 데이터를 기반으로 추천</span>

            </div>
        </Card>

        <Card title={'today'}>
            <button onClick={dbTest} className='home-add-btn font-icon'>add</button>
        </Card>

<Card title={'tips'}>
    <div className='home-tips'>
        알고 계셨나요? 우리의 수면은 처음 90분이 가장 중요하다는 사실<br/>
        잠에들고 처음으로 맞이하는 깊은수면의 질에 따라 나머지 수면의 질도 변한다고 합니다.
    </div>
</Card>

<Card title={'tips'}>
    <div className='home-tips'>
        알고 계셨나요? 우리의 수면은 처음 90분이 가장 중요하다는 사실<br/>
        잠에들고 처음으로 맞이하는 깊은수면의 질에 따라 나머지 수면의 질도 변한다고 합니다.
    </div>
</Card>

<Card title={'tips'}>
    <div className='home-tips'>
        알고 계셨나요? 우리의 수면은 처음 90분이 가장 중요하다는 사실<br/>
        잠에들고 처음으로 맞이하는 깊은수면의 질에 따라 나머지 수면의 질도 변한다고 합니다.
    </div>
</Card>

<Card title={'tips'}>
    <div className='home-tips'>
        알고 계셨나요? 우리의 수면은 처음 90분이 가장 중요하다는 사실<br/>
        잠에들고 처음으로 맞이하는 깊은수면의 질에 따라 나머지 수면의 질도 변한다고 합니다.
    </div>
</Card>

<Card title={'tips'}>
    <div className='home-tips'>
        알고 계셨나요? 우리의 수면은 처음 90분이 가장 중요하다는 사실<br/>
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