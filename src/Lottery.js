import React, { Component } from "react";
import Ball from "./Ball";

class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    maxBalls: 6,
    maxNum: 40,
  };
  constructor(props) {
    super(props);
    this.state = { nums: Array.from({ length: this.props.maxBalls }) };
    this.handleClick = this.handleClick.bind(this);
  }
  generate() {
    this.setState((curState) => ({
      nums: curState.nums.map((n) =>
        Math.floor(Math.random() * this.props.maxNum + 1)
      ),
    }));
  }

  handleClick() {
    this.generate();
    console.log(this.state.nums);
  }

  render() {
    return (
      <div className="lottery">
        <h1>{this.props.title}</h1>
        <h3>Max Balls: {this.props.maxBalls}</h3>
        <h3>Numbers: 1-{this.props.maxNum}</h3>
        <div>
          {this.state.nums.map((n) => (
            <Ball num={n} />
          ))}
        </div>

        <button onClick={this.handleClick}>Generate</button>
      </div>
    );
  }
}

export default Lottery;
