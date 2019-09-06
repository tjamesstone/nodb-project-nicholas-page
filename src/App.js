import React, {Component} from 'react';
import './App.css';
import MessageBoard from './Components/MessageBoard'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Origin from './Components/Origin'



class App extends Component{
  render() {
    return (
    <div className="App">
      <Header />
      <MessageBoard />
      <Origin />
      <Footer />
    </div>
  )
  }
}

export default App;
