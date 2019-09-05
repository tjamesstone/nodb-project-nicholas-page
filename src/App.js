import React, {Component} from 'react';
import './App.css';
import MessageBoard from './Components/MessageBoard'

class App extends Component{
  render() {
    return (
    <div className="App">
      <MessageBoard />
    </div>
  )
  }
}

export default App;
