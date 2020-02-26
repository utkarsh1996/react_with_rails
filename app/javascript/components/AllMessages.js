import React from "react"
import PropTypes from "prop-types"
import { Card, Button } from "semantic-ui-react"

export class AllMessages extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editMessage: false
    }
  }
  render() {
    var messages = this.props.messages.map((message) => {
      return (
        <Card>
          <Card.Content header={message.title} />
            <Card.Content description={message.message} />
            <Card.Content extra>
           <div className='ui two buttons'>
           <Button basic color='green'>{this.state.editMessage?'Submit' : 'Edit'}</Button>
           <Button onClick={()=> this.props.handleDelete(message.id)} basic color='red'>
                Delete
           </Button>
           </div>
            </Card.Content>
        </Card>
      )
    })
    return (
      <div style = {{padding:"1%"}}>
      {messages}
    </div>
    );
}
}

export default AllMessages
