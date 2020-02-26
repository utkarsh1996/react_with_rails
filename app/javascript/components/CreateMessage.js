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
          <input ref={input => formFields.title = input}  label='Title' placeholder='Enter title here..' width={6} />
        </Form.Group>
        <Form.Group>
          <textarea ref={input => formFields.message = input} label='Message' placeholder='Enter message here..' width={6} />
        </Form.Group>
        <Form.Button width={2}>Post</Form.Button>
      </Form>
      {/* <form class="ui form" onSubmit={(e) => {
        props.handleFormSubmit(formFields.title.value, formFields.message.value);
        e.target.reset();
      }}>
        <div class = "equal width fields">
          <div class="field">
          <label>Title</label>
          <div class="ui fluid input">
            <input ref={input => formFields.title = input} type="text" placeholder="Enter Title" />
          </div>
          </div>
        </div>
        <div class = "equal width fields">
          <div class="field">
          <label>Message</label>
          <textarea ref={input => formFields.message = input} placeholder="Enter Message" rows="3"></textarea>
          </div>
          </div>
      </form> */}
    </React.Fragment>
  );
}

export default CreateMessage
