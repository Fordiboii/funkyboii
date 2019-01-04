import React, {Component} from 'react';
import './App.css';
import Layout from "./components/Layout";

class App extends Component {
  render() {
    return (
      <div style={{margin: 0}}>
        <Layout style={{marginLeft: '10vw', marginRight: '10vw'}}/>
      </div>
    );
  }
}

export default App;
