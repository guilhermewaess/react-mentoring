import React, { PureComponent } from "react";

export default class ReactPureComponent extends PureComponent {
  constructor(props) {
    super();
  }

  render() {
    return (
      <h1>
        Hello {this.props.mentorName}, this is React.PureComponent component :)
      </h1>
    );
  }
}
