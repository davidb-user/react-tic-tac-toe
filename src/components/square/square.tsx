import React from "react";
import "./square.css";

export type SquareValue = string | null;

interface SquareProps {
  value: SquareValue;
  onClick: () => void;
}

interface SquareState {
  value: SquareValue;
}

export class Square extends React.Component<SquareProps, SquareState> {
  constructor(props: SquareProps) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}
