import { connect } from "react-redux";
import { ACTION } from "./store";

const ColorSample = ({no,category,colorSet,setColorSet}) =>{
    function onClick(){
        console.log(colorSet)
        setColorSet(colorSet)
    }

    return <span onClick={onClick} className={`color-sample color-${category}-${no}`}></span>
}

function mapStatetoProps(state,props){
    let colorSet = {...state.colorSet};
    const {category,no} = props;
    colorSet[category+'Color'] = no;
    return {
        colorSet
    }
}

function mapDispatchProps(dispatch) {
    return {
        setColorSet: (theme) => dispatch(ACTION.setColorSet(theme)),
    }
}

export default connect(mapStatetoProps,mapDispatchProps)(ColorSample);