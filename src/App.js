import React, { Component } from 'react';
import Layout from './components/Layout';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <p>test</p>
        </Layout>
      </div>
    );
  }
}

export default App;
