import React from 'react';

type State = {
  error: null | string,
};

class ErrorBoundary extends React.Component<{}, State> {
  state: State = {
    error: null,
  }

  componentDidMount() {
    if (this.state.error) {
      this.setState({ error: 'error' })
    }
  }

  render() {
    if (this.state.error) {
      return <h1>Somethind went wrong</h1>
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
