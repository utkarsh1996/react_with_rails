import React from "react"
import PropTypes from "prop-types"
import { Card, Button } from "semantic-ui-react"
import { CreateComment } from './CreateComment'
import { Redirect } from 'react-router-dom'
export class Message extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editable: false,
      redirect: false,
      isCreateComment: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }
  handleEdit() {
    if (this.state.editable) {
      let title = this.title.value
      let message = this.message.value
      let id = this.props.message.id
      let msg = { id: id, title: title, message: message, user_id: 1 }
      this.props.handleUpdate(msg)
    }
    this.setState({
      editable: !this.state.editable
    })
  }
  // callCreateComment = () => {
  //   console.log('utkarsh')
  //   return <Redirect to="/CreateComment" />

  // }
  render() {
    let title = this.state.editable ?
      <input type="text" ref={input => this.title = input} defaultValue={this.props.message.title} /> :
      <h4>{this.props.message.title}</h4>
    let message = this.state.editable ?
      <input type="text" ref={input => this.message = input} defaultValue={this.props.message.message} /> :
      <h4>{this.props.message.message}</h4>
    return (
      <React.Fragment>
            <Card.Content>
              {title}
            </Card.Content>
            <Card.Content>
              {message}
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button onClick={() => this.handleEdit()} basic color='green'>{this.state.editable ? 'Submit' : 'Edit'}</Button>
                <Button onClick={() => this.props.handleDelete(this.props.message.id)} basic color='red'>
                  Delete
              </Button>
                {/* <Button basic color='blue'>Comment</Button> */}
              </div>
            </Card.Content>
            <Card.Content>
            <Button basic color='blue'>Comment</Button>
              {/* <Button basic color='blue' onClick={this.callCreateComment}>Comment</Button> */}
              {/* <button className="ui blue basic button" onClick={ ()=> callCreateComment() }>Comment</button> */}
            </Card.Content>
      </React.Fragment>
    );
  }
}

export default Message
