import React, { Component,Fragment } from 'react';
import Demo from './components/8_ErrorBoundary/Parent'

class App extends Component {
  render() {
    return (
      <Fragment key={1}>
        <Demo/>
      </Fragment>
    );
  }
}

export default App;