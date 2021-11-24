import { connect } from "react-redux";

const Home = ({user,sleepData}) =>{
    return(<div>Home...<br/>
        {user.uid}<br/>
        {user.displayName}<br/>
        {user.email}<br/>

        {sleepData.map(v=><div>{v.last}</div>)}
    </div>)
}

function mapStatetoProps(state,props){
    const {user,sleepData} = state;
    console.log(sleepData)
    return {user,sleepData}
}

export default connect(mapStatetoProps)(Home);