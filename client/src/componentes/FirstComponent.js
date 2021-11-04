// CLASS components
import { Component } from "react";

class FirstComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div className="firstComponent">
        <p>Aca va el primer componente</p>
        <input
          id="counter"
          type="button"
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        />
      </div>
    );
  }
}

export default FirstComponent;
