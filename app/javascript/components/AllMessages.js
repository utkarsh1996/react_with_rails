import React from "react"
import PropTypes from "prop-types"
import { Card } from "semantic-ui-react"

export const AllMessages = (props) => {
    var messages = props.messages.map((message) => {
      return (
        <Card>
          <Card.Content header={message.title} />
            <Card.Content description={message.message} />
        </Card>
      )
    })
    return (
      <div style = {{padding:"1%"}}>
      {messages}
    </div>
    );
}

export default AllMessages
