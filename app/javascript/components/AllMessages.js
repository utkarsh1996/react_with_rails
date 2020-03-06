import React from "react"
import PropTypes from "prop-types"
import { Card, Button } from "semantic-ui-react"
import { Message } from './Message'
export const AllMessages = (props) => {
  var messages = props.messages.map((message) => {
    return (
      <Card key={message.id}>
        <Message message={message} current_user = {props.current_user} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate} />
      </Card>
    )
  })
  return (
    <div style={{ padding: "1%" }}>
      {messages.reverse()}
    </div>
  );
}

export default AllMessages
