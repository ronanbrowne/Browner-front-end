import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    isLoading: true,
    groups: []
  };

  async componentDidMount() {
    const response = await fetch('/api/hello');
    const body = await response.text()
    alert (body)
    this.setState({ groups: body, isLoading: false });
  }


  render() {
    const {groups, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-intro">
            <h2>From back-end</h2>
              <div key="1">
                {groups}
              </div>
            
          </div>
        </header>
      </div>
    );
  }
}

export default App;
