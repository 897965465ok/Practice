import { Component } from "react"
import Home from "./pages/Home"
import {connect} from "react-redux"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
        <Home></Home>
    );
  }
}

export default connect()(App);
