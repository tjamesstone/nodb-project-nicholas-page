import React, { Component } from "react";
import img1 from '../pics/img1.jpg'
import img2 from '../pics/img2.jpg'
import img3 from '../pics/img3.jpg'
import img4 from '../pics/img4.jpg'
import img5 from '../pics/img5.jpg'
import img6 from '../pics/img6.jpg'
const img7 = "https://i.imgur.com/3qQUjcS.png"



export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editting: false,
      text: this.props.text,
      rand1: Math.floor(Math.random() *7),
      pics: [img1, img2, img3, img4, img5, img6, img7]
    };

    this.handleChange = this.handleChange.bind( this );
    this.edit = this.edit.bind( this );
  }

  handleChange( event ) {
    this.setState({ text: event.target.value });
  }

  edit( event ) {
    const { text } = this.state;
    const { id, edit } = this.props;
    if( event.key === "Enter" && text.length !== 0 ) {
      edit( id, text );
      this.setState({ editting: false });
    }
  }

  render() {
    const { id, text, time, remove } = this.props;
    const { editting } = this.state;
    // console.log( id, text );
    return (
      <div className="MessageContainer">
        <div className="nickimage">
          <img src={this.state.pics[this.state.rand1]} width="100%" height="100%" alt="sexy nick cage pic"/>
        </div> 
        
        
        <div className="actualmessage">
        <div className="timeandthedate">
            <p className="timeanddate">{time}</p>
           </div>
        {
          editting
          ?
            <input className="editinput" value={ this.state.text } onChange={ this.handleChange } onKeyPress={ this.edit } />
          :
            <p className="messagetext">{text}</p>
        }
        </div>
       
        <div className="buttonscontainer">
          <div className="buttonsonly">
              <button className="editbutton" onClick={ () => this.setState({ editting: !this.state.editting, text }) }> Edit </button>
              <button className="deletebutton" onClick={ () => remove( id ) }>  Delete </button>
          </div>
          
        </div>
      </div>
    )
  }
}