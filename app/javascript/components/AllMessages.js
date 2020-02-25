import React from "react"
import PropTypes from "prop-types"
import { Button, Form, Header, Menu } from "semantic-ui-react"
export class AllMessages extends React.Component {
  constructor(props) {
    // fetch('/api/v1/messages.json')
    //    .then((response) => { console.log (response.json()) })
    super(props);
    this.state = {
      messages = []
    };
  }
  componentDidMount() {
    fetch('/api/v1/messages.json')
       .then((response) => { return response.json() })
       .then((data) => { this.setState({ messages: data }) });
  }
  render () {
    var messages = this.state.messages.map((message) => {
      return (
        <Card>
          <Card.Content header={message.title} />
            <Card.Content description={message.message} />
        </Card>
      )
    })
    return (
      <div style = {{padding:"1%"}}>
        <Header as='h3' dividing>
         Create Message
        </Header>
        <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Title' placeholder='Enter title here..' />
        <Form.TextArea label='Message' placeholder='Enter message here..' />
        </Form.Group>
        <Form.Button floated='right'>Post</Form.Button>
      </Form>
      {messages}
    </div>
    );
  }
}

export default AllMessages
