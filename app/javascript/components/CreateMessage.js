import React from "react"
import PropTypes from "prop-types"
import { Form, Header } from "semantic-ui-react"
export const CreateMessage = (props) => {
    return (
      <React.Fragment>
        <Header as='h3' dividing>
         Create Message
        </Header>
      <Form>
      <Form.Group>
      <Form.Input fluid label='Title' placeholder='Enter title here..' width = {6} />
      </Form.Group>
      <Form.Group>
      <Form.TextArea label='Message' placeholder='Enter message here..' width = {6} />
      </Form.Group>
      <Form.Button width = {2}>Post</Form.Button>
      </Form>
      </React.Fragment>
    );
}

export default CreateMessage
