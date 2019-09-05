import React, { Component } from "react";



export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editting: false,
      text: this.props.text
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
    const { id, text, time, edit, remove } = this.props;
    const { editting } = this.state;
    // console.log( id, text );
    return (
      <div className="MessageContainer">
        <p className="timeanddate">{time}</p>
        {
          editting
          ?
            <input className="editinput" value={ this.state.text } onChange={ this.handleChange } onKeyPress={ this.edit } />
          :
            <p className="messagetext">{text}</p>
        }
        <button className="editbutton" onClick={ () => this.setState({ editting: !this.state.editting, text }) }> Edit </button>
        <button className="deletebutton" onClick={ () => remove( id ) }>  Delete </button>
      </div>
    )
  }
}