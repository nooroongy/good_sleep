import { useEffect, useState } from "react";
import { connect } from "react-redux";
import BarGraph from "../components/BarGraph";
import Card from "../components/Card";
import DotGraph from "../components/DotGraph";
import { FB_DB } from "../components/_firebase";
import '../css/home.css'

const Home = ({ bestTime, bestTimeAt, dataForBarGrahp, dataForDotGraph }) => {
    const [tips, setTips] = useState([])
    const [selectedTipIndex, setSelectedTipIndex] = useState(0);

    useEffect(() => {
        FB_DB.get('tips').then(res => {
            setTips(res)
            selectRandomTip(res);
        })
    }, [])

    const selectRandomTip = (res) => {
        const tipLength = res.length;
        const randomNum = Math.floor(Math.random() * 10 * tipLength) % tipLength;
        setSelectedTipIndex(randomNum);
    }

    return (<div className='home-wrap'>
        <div className='home-wrap-full'>
            <Card title={'tips'}>
                <div className='home-tips'>
                    {tips[selectedTipIndex]?.info}
                </div>
            </Card>
            <Card title={'time line'}>
                <BarGraph datas={dataForBarGrahp} ></BarGraph>
            </Card>
        </div>
        <div className='home-wrap-half'>
            <Card title={'sleep for'}>
                <div className='home-for-you-wrap'>
                    <span className='home-for-you-hour main-color'>{bestTime}</span>
                </div>
            </Card>
            <Card title={'sleep at'}>
                <div className='home-at-you-wrap'>
                    <span className='home-at-you-hour main-color'>{bestTimeAt}</span>
                </div>
            </Card>
        </div>
        <div className='home-wrap-full'>
            <Card title={'score board'}>
                <DotGraph datas={dataForDotGraph}></DotGraph>
            </Card>
        </div>

        <div className='home-wrap-full'>
            {tips.map((tip, i) => {
                return selectedTipIndex === i ? '' : <Card title={'tips'} key={i}>
                    <div className='home-tips'>
                        {tip.info}
                    </div>
                </Card>
            })}

        </div>
    </div>)
}

function mapStatetoProps(state) {
    const { sleepData } = state;

    //??? ????????? ????????? ???????????? ??????
    function getTimeDifference(startTime, endTime) {
        const h1 = startTime.substr(0, 2) * 1;
        const m1 = startTime.substr(2, 2) * 1;
        const h2 = endTime.substr(0, 2) * 1;
        const m2 = endTime.substr(2, 2) * 1;

        let diffH = h1 > h2 ? (24 + h2 - h1) : (h2 - h1);
        let diffM = m2 - m1;

        if (diffM < 0) { diffM += 60; diffH--; }
        return { diffH, diffM }
    }

    //string ???????????? ??? ????????? ???????????? ??????
    const getSleepTimeToString = (startTime, endTime) => {
        const { diffH, diffM } = getTimeDifference(startTime, endTime)
        return (diffH + 'H ' + diffM + 'M')
    }

    //number ???????????? ??? ????????? ???????????? ??????
    const getSleepTime = (startTime, endTime) => {
        const { diffH, diffM } = getTimeDifference(startTime, endTime)
        return diffH * 60 + diffM;
    }

    //sleep for ??? ?????????????????? ??????
    const sleepDataFor = sleepData.map(v => {
        return {
            rating: v.rating,
            sleepStart: v.sleepStart,
            sleepTimeStr: getSleepTimeToString(v.sleepStart, v.sleepEnd),
            sleepTime: getSleepTime(v.sleepStart, v.sleepEnd)
        }
    })

    //??????????????? ?????? ??????
    const findBestTime = [];
    sleepDataFor.forEach(v => {
        if (findBestTime.filter(time => time.time === v.sleepTimeStr).length === 0) {
            findBestTime.push({
                time: v.sleepTimeStr,
                score: 0,
                start: v.sleepStart.substr(0, 2) + ':' + v.sleepStart.substr(2, 2)
            })
        }

        findBestTime.forEach((times, i) => {
            if (times.time === v.sleepTimeStr) findBestTime[i].score += (v.rating - 3) * 1;
        })
    })
    findBestTime.sort((a, b) => b.score - a.score);

    const bestTime = findBestTime[0]?.time;
    const bestTimeAt = findBestTime[0]?.start;

    //?????????????????? ?????? ????????? ?????? ??????
    const dataForBarGrahp = sleepData.map(data => {
        return {
            height: (getSleepTime(data.sleepStart, data.sleepEnd) - 80) / 6,
            col: `${data.date.substr(2, 2)}/${data.date.substr(4, 2)}/${data.date.substr(6, 2)}`,
            color: data.rating
        }
    })

    //??????????????? ?????? ????????? ?????? ??????
    const dataForDotGraph = sleepData.map(data => {
        return {
            posX: Math.min((getSleepTime(data.sleepStart, data.sleepEnd) - 120) * 2 / 3 - 3, 320),
            posY: data.rating * 30 - 5,
        }
    })

    return { bestTime, bestTimeAt, dataForBarGrahp, dataForDotGraph }
}

export default connect(mapStatetoProps)(Home);