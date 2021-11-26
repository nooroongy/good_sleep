import { connect } from "react-redux";
import SleepCard from "../components/SleepCard";
import { ACTION } from "../components/store";
import { FB_DB } from "../components/_firebase";

const Home = ({ user, sleepData=[], connectSleepDB}) => {
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

    function dbTest2() {
        if(sleepData.length === 0) return;
        FB_DB.delete('sleep', sleepData[0].id)
        
        FB_DB.get('sleep').then(res => {
            connectSleepDB(res.filter(data => data.uid === user.uid))
        })
    }

    return (<>
        <button onClick={dbTest}>add</button>
        <button onClick={dbTest2}>delete</button><br />
        {sleepData.map(data => <SleepCard id={data.id} key ={data.id}/>)}
    </>)
}

function mapStatetoProps(state, props) {
    const { user, sleepData} = state;
    return { user, sleepData}
}

function mapDispatchProps(dispatch) {
    return {
        connectSleepDB: (user) => dispatch(ACTION.setSleep(user)),
    }
}

export default connect(mapStatetoProps, mapDispatchProps)(Home);