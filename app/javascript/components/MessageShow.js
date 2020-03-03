import React from "react"
import PropTypes from "prop-types"
import { Header } from "semantic-ui-react"
import { AllMessages} from './AllMessages'
import { CreateMessage} from './CreateMessage'
export class MessageShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages : [],
      newMessages : []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewMessage = this.addNewMessage.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.updateMessage = this.updateMessage.bind(this)
  }
  handleFormSubmit(title, message) {
    console.log(title, message)
    let body = JSON.stringify({ message: {title: title, message: message, user_id: 1 } })

    fetch('http://localhost:3000/api/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => {return response.json()})
      .then((message) => {
        this.addNewMessage(message)
      })
  }
  handleDelete(id) {
    fetch(`http://localhost:3000/api/v1/messages/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      this.deleteMessage(id);
    })
  }
  deleteMessage(id) {
    this.state.newMessages = this.state.messages.filter((message) => message.id !== id)
    this.setState({
      messages: this.state.newMessages
    })
  }
  handleUpdate(message) {
    fetch(`http://localhost:3000/api/v1/messages/${message.id}`,{
      method: 'PUT',
      body: JSON.stringify({message: message}),
      headers: {
        'Content-Type': 'application/json'
      } 
    }).then((response) => {
      this.updateMessage(message)
    })
  }
  updateMessage(message) {
    let newEditMessage = []
    this.state.messages.forEach((m) => {
      if(m.id !== message.id) {
        newEditMessage.push(m);
      }
      else {
        newEditMessage.push(message) ;
      }
    })
    this.setState({
      messages: newEditMessage
    })
  }
  addNewMessage(message) {
    this.setState({
      messages: this.state.messages.concat(message)
    })
  }
  componentDidMount() {
    fetch('/api/v1/messages.json')
       .then((response) => { return response.json() })
       .then((data) => { 
         this.setState({ messages: data }) });
  }
  render () {
    return (
      <React.Fragment>
        <div style = {{padding:"1%"}}>
        <CreateMessage handleFormSubmit = {this.handleFormSubmit} />
        <Header as='h3' dividing>
         My Message
        </Header>
        <AllMessages messages = { this.state.messages} handleDelete = {this.handleDelete} handleUpdate={this.handleUpdate}/>
        </div>
      </React.Fragment>
    );
  }
}

export default MessageShow
