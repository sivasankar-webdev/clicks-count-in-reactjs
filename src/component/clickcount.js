import React from 'react';
// import './component/App.css'
import '../App.css';

class Clickcount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }

  Changenum() {
    this.setState({
      num: this.state.num + 1,
    });
  }

  render() {
    return (
        <div>
        <h1>No of clicks - {this.state.num}</h1>
        <button onClick={() => this.Changenum()}>Count when link is clicked</button>
      </div>
    );
  }
}

export default Clickcount;
