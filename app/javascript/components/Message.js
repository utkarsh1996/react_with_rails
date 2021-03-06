import React from "react"
import PropTypes from "prop-types"
import { Card, Button, Header, Icon, Comment, Form, Modal } from "semantic-ui-react"
import { ShowComments } from './ShowComments'
export class Message extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
      editable: false,
      isCreateComment: false,
      formInputComment: null
    }
    this.handleEdit = this.handleEdit.bind(this)
  }
  handleEdit() {
    if (this.state.editable) {
      let title = this.title.value
      let message = this.message.value
      let id = this.props.message.id
      let msg = { id: id, title: title, message: message, user_id: this.props.current_user.id }
      this.props.handleUpdate(msg)
    }
    this.setState({
      editable: !this.state.editable
    })
  }
  handleClick = () => {
    console.log("working till here")
    let comment = this.state.formInputComment.value
    let body = JSON.stringify({ comment: { comment: comment, likes: 0, user_id: this.props.current_user.id, message_id: this.props.message.id } })
    fetch('http://localhost:3000/api/v1/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => { return response.json() })
      .then((comment) => {
        this.addNewComment(comment)
      })
  }
  addNewComment(comment) {
    this.setState({
      comments: this.state.comments.concat(comment)
    })
  }
  componentDidMount() {
    fetch('/api/v1/comments.json')
      .then((response) => { return response.json() })
      .then((data) => {
        this.setState({ comments: data });
      })
  }
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
          </div>
        </Card.Content>
        <Modal trigger={<Button>Comment</Button>} closeIcon>
          <Modal.Header>{this.props.message.title}</Modal.Header>
          <Modal.Content image scrolling>
            <p>{this.props.message.message}</p>
          </Modal.Content>
          <Modal.Content>
            <Comment.Group>
              <Header as='h4' dividing>Comment</Header>
              <ShowComments comments={this.state.comments} message={this.props.message} current_user={this.props.current_user}/>
              <Form reply onSubmit={(e) => { e.target.reset(); }}>
                <textarea ref={input => this.state.formInputComment = input} />
                <Button primary width={2} onClick={this.handleClick}>Post Comment</Button>
              </Form>
            </Comment.Group>
          </Modal.Content>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Message
