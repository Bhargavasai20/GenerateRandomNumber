import { Component } from "react";
import "./index.css";

class App extends Component {
  state = { value: 0 };

  generateButton = () => {
    const randomNumber = Math.ceil(Math.random() * 100);
    this.setState((prevState) => ({ value: randomNumber }));
  };

  render() {
    const { value } = this.state;
    return (
      <div className="container">
        <div className="card">
          <h1 className="head">Random Number</h1>
          <p className="para">
            Genarate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.generateButton}
          >
            Generate
          </button>
          <p className="para1">{value}</p>
        </div>
      </div>
    );
  }
}

export default App;
