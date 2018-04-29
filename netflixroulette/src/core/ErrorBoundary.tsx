import * as React from 'react';

interface IState {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component {
  public state: IState;

  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  public componentDidCatch(error: any, errorInfo: any) {
    this.setState({ hasError: true });
    // tslint:disable-next-line
    console.log('Ups!', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Ops</h1>;
    }

    return this.props.children;
  }
}
