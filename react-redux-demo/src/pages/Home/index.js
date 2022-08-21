import { Component } from "react"
import { ACTION, ASYNC, PLUSH } from "../../store/action";
import { connect } from "react-redux";
class Home extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {
        const { count, plush, action, asyncFun, value } = this.props
        return (
            <div className="home">
                <p>{count}</p>
                <p>  {value}</p>
                <button onClick={plush} >PLUSH</button>
                <button onClick={action}>ACTION</button>
                <button onClick={asyncFun}>ASYNC</button>
            </div>
        );
    }
}

const mapStateToProps = (props, ownProps) => {
    return {
        ...ownProps,
        ...props
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        plush: () => {
            dispatch(PLUSH(10))
        },
        action: () => {
            dispatch(ACTION())
        },
        // 异步处理
        asyncFun: ()=>{
            dispatch(ASYNC())
        }

    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Home);