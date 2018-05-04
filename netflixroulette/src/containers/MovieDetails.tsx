import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export default class MovieDetails extends React.Component<RouteComponentProps<{ id: string }>> {
  constructor(props: RouteComponentProps<{ id: string }>) {
    super(props);
  }

  public render() {
    return <div className="w-100 h-100">
      <span>{this.props.match.params.id}</span>
    </div>
  }
}