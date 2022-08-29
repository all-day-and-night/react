import "./styles.css";
import "./css/App.css";
import React, { Component, Fragment } from "react";
import MyName from "./MyName.js";
import Counter from "./Counter.js";
import MyComponent from "./MyComponent.js";

class App extends Component {
  state = {
    counter: 1
  };

  constructor(props) {
    super(props);
    console.log("constuctor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  handleCilck = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    return (
      <Fragment>
        <div className="App">안녕하세요!</div>
        <MyName />
        <Counter />
        <MyComponent value={this.state.counter} />
        <button onClick={this.handleCilck}>Click me</button>
      </Fragment>
    );
  }
}

export default App;
