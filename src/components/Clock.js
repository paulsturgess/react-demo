import React, { Component } from 'react';

class Clock extends Component {
  // Like initialize in ruby
  constructor(props) {
    super(props); // You always have to call super
    this.state = {date: new Date()}; // Do any initialization tasks
  }

  // This is a lifecycle method called when the component is first loaded on screen
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  // This is a lifecycle method called when the component is removed from the screen
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // This is called by the timer setup when the component was mounted
  tick() {
    this.setState({
      date: new Date()
    });
  }

  // Render is called every time the component state changes
  render() {
    return (
      <div>
        <h2>Clock</h2>
        <p>It is {this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Clock;
