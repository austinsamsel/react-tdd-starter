import React, { Component } from 'react';

const styles = {
  height:'100%',
  background: '#333'
}

class App extends Component {
  render() {
    return(
      <div style={styles}>
        <h1 className='welcome-header'>Welcome!</h1>
      </div>
    )
  }
}
export default App;
