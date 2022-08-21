import { Component } from "react"
import Home from "./pages/Home"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="APP">
        <Home></Home>
      </div>
    );
  }
}

export default App;
