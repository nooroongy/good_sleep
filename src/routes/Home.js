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

    return (<>
        <button onClick={dbTest}>add</button>
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