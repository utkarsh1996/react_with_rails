import React from "react"
import PropTypes from "prop-types"
import { Card, Button,Header, Icon, Comment, Form, Modal } from "semantic-ui-react"
export class Message extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editable: false,
      isCreateComment: false,
      comments: {}
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
        <Modal trigger={<Button>Comment</Button>} closeIcon>
         <Modal.Header>{this.props.message.title}</Modal.Header>
          <Modal.Content image scrolling>
              {/* <Header>Modal Header</Header> */}
              <p>{this.props.message.message}</p>

              {/* {_.times(8, (i) => (
                <Image
                  key={i}
                  src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                  style={{ paddingBottom: 5 }}
                />
              ))} */}
            
          </Modal.Content>
          <Modal.Content>
          <Comment.Group>
              <Header as='h4' dividing>Comment</Header>
              <Comment>
                <Comment.Author>Author Name</Comment.Author>
                <Comment.Text>Nice comment</Comment.Text>
              </Comment>
              <Form reply>
                {/* <Form.TextArea /> */}
                <textarea />
              </Form>
            </Comment.Group>
          </Modal.Content>
          <Modal.Actions>
            <Button primary onClick={this.handleClick}>
              Post Comment <Icon name='chevron right' />
            </Button>
          </Modal.Actions>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Message
