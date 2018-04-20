import React, { Component } from "react";

export default class ReactComponent extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <h1>
        Hello {this.props.mentorName}, this is React.Component component :)
      </h1>
    );
  }
}
