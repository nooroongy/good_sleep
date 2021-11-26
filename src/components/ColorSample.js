import { connect } from "react-redux";
import { ACTION } from "./store";

const ColorSample = ({no,category,theme,setTheme}) =>{
    function onClick(){
        setTheme(theme)
    }

    return <span onClick={onClick} className={`color-sample color-${category}-${no}`}></span>
}

function mapStatetoProps(state,props){
    let theme = {...state.theme};
    const {category,no} = props;
    theme[category+'Color'] = no;
    return {
        theme
    }
}

function mapDispatchProps(dispatch) {
    return {
        setTheme: (theme) => dispatch(ACTION.settheme(theme)),
    }
}

export default connect(mapStatetoProps,mapDispatchProps)(ColorSample);