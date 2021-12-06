import { connect } from "react-redux";
import Card from "../components/Card";
import { ACTION } from "../components/store";
import { FB_DB } from "../components/_firebase";
import '../css/home.css'

const Home = ({ user, sleepData = [], connectSleepDB }) => {

    function getSleepTime(time1, time2) {
        const h1 = time1.substr(0, 2) * 1;
        const m1 = time1.substr(2, 2) * 1;
        const h2 = time2.substr(0, 2) * 1;
        const m2 = time2.substr(2, 2) * 1;

        let diffH = h1 > h2 ? 24 + h2 - h1 : h2 - h1;
        let diffM = m2 - m1;

        if (diffM < 0) {
            diffM += 60;
            diffH--;
        }

        return diffH * 60 + diffM
    }

    const sleepDataFor = sleepData.map(v => {
        return {
            rating: v.rating,
            sleepStart:v.sleepStart,
            sleepTime: getSleepTime(v.sleepStart, v.sleepEnd)/10
        }
    })

    let findBestTime=[];

    sleepDataFor.forEach(v=>{
        if(findBestTime.filter(time=>time.time === v.sleepTime).length === 0)findBestTime.push({time:v.sleepTime,score:0})

        findBestTime.forEach((times,i)=>{
            if(times.time === v.sleepTime) findBestTime[i].score += (v.rating-3)*1;
        })
    })

    findBestTime.sort((a,b)=>b.score-a.score)
    console.log(findBestTime)

    const bestTime = findBestTime[0].time*10/60;
    console.log()

    return (<div className='home-wrap'>
        <div className='home-wrap-full'>
            <Card title={'time line'}>
                <div className='home-graph-wrap'>
                    {sleepData.map(v => {
                        const height = (getSleepTime(v.sleepStart, v.sleepEnd)) / 4;
                        return <span className='home-graph-data' key={v.id}>
                            <span className={'home-graph-bar home-graph-rating' + v.rating + ' home-graph-sleeptime sub-color'}
                                style={{ height: height > 128 ? 128 : height + 'px' }}>
                            </span>
                            <span className='home-graph-date'>{`${v.date.substr(0, 4)}/${v.date.substr(4, 2)}/${v.date.substr(6, 2)}`}</span>
                        </span>
                    })}
                </div>
            </Card>
        </div>

        <div className='home-wrap-half'>
            <Card title={'sleep for'}>
                <div className='home-for-you-wrap'>
                    <span className='home-for-you-hour main-color'>{bestTime}</span>
                    {/* <span className='home-for-you-base'>123일간의 데이터를 기반으로 추천</span> */}
                </div>
            </Card>
            <Card title={'sleep at'}>
                <div className='home-at-you-wrap'>
                    <span className='home-at-you-hour main-color'>23:00</span>
                    {/* <span className='home-for-you-base'>123일간의 데이터를 기반으로 추천</span> */}
                </div>
            </Card>
        </div>


        <div className='home-wrap-full'>

            <Card title={'today'}>
                <button className='home-add-btn font-icon'>add</button>
            </Card>
        </div>

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