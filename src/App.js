import React, {Component} from 'react';
import './App.css';
import MessageBoard from './Components/MessageBoard'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Origin from './Components/Origin'
import Videos from './Components/Videos'



class App extends Component{
  render() {
    return (
    <div className="App">
      <Header />
      
      
      <MessageBoard />
      <Videos />
      <Origin />
      <Footer />
    </div>
  )
  }
}

export default App;
