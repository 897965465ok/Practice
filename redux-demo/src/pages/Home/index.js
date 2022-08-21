import { Component } from "react"
import { action } from "../../actions"
import { store } from '../../store'
import "./index.css"
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    clickButton() {
        // 创建action 对象
        let objec = action()
        // 发送
        store.dispatch(objec)
    }
    // 生命周期钩子
    componentDidMount() {
        console.log("渲染完毕触发")
        store.subscribe(() => {
            // 数据reducer 修改state后触发
           console.log("subscribe",store.getState())
        //    使用   this.setState({}) 会触发render
           this.setState({})
        })
    }
    render() {
        return (
            <div className="home">
                {store.getState().value}
                {console.log("你是gay")}
                <button onClick={this.clickButton.bind(this)} >点击发送actions</button>
            </div>
        );
    }
}

export default Home;