import React, { Component } from "react"
import axios from "axios"
import Message from './Message'
import dateTime from '../dateTime'

export default class MessageBoard extends Component {
  constructor() {
    super()
    this.state = {
      messages: [],
      text: ''
    };

    this.handleChange = this.handleChange.bind( this )
    this.createMessage = this.createMessage.bind( this )
    this.editMessage = this.editMessage.bind( this )
    this.removeMessage = this.removeMessage.bind( this )
  }

  componentDidMount() {
    axios.get('/api/messages').then( res => {
      this.setState({ messages: res.data })
    })
    // console.log(this.state.messages) 
  }

  handleChange( event ) {
    this.setState({ text: event.target.value })
  }

  createMessage( event ) {
    const { text } = this.state
    if ( event.key === "Enter" && text.length !== 0 ) {
      axios.post( '/api/messages', { text, time: dateTime() } ).then( res => {
        this.setState({ messages: res.data })
      });

      this.setState({ text: '' })
    }
  }

  editMessage( id, text ) {
    // console.log( 'editMessage:', id, text )
    axios.put( `/api/messages/${id}`, { text } ).then( res => {
      this.setState({ messages: res.data })
    });
    
  }

  removeMessage( id ) {
    axios.delete( `/api/messages/${id}` ).then( res => {
      this.setState({ messages: res.data })
    });
  }

  render() {
    return (
      <div className="MessageBoard">
        
        <div className="MessageBoardMessages">
            {
              this.state.messages.map( message => ( 
              <Message 
              id={ message.id} 
              key={ message.id } 
              text={ message.text }  
              time={ message.time } 
              edit={ this.editMessage} 
            remove={ this.removeMessage }/>  
              ))
            }
        </div>
        <div className="MessageBoardInput">
          <input placeholder="Your love for Nick Cage goes here. Press enter to share" 
                 onKeyPress={ this.createMessage }
                 onChange={ this.handleChange }
                 value={ this.state.text }
          />
        </div>
        
      </div>
    )
  }
}