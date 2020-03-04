import React from "react"
import PropTypes from "prop-types"
import { Form, Header } from "semantic-ui-react"
export const CreateMessage = (props) => {
  let formFields = {}
  return (
    <React.Fragment>
      <Header as='h3' dividing>
        Create Message
      </Header>
      <Form onSubmit={(e) => {
        props.handleFormSubmit(formFields.title.value, formFields.message.value);
        e.target.reset();
      }}>
        <Form.Group>
          <input ref={input => formFields.title = input} label='Title' placeholder='Enter title here..' width={6} />
        </Form.Group>
        <Form.Group>
          <textarea ref={input => formFields.message = input} label='Message' placeholder='Enter message here..' width={6} />
        </Form.Group>
        <Form.Button width={2}>Post</Form.Button>
      </Form>
    </React.Fragment>
  );
}

export default CreateMessage
