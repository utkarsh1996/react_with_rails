import React from "react"
import PropTypes from "prop-types"
import { Header } from "semantic-ui-react"
import { AllMessages} from './AllMessages'
import { CreateMessage} from './CreateMessage'
export class MessageShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages : []
    };
  }
  componentDidMount() {
    fetch('/api/v1/messages.json')
       .then((response) => { return response.json() })
       .then((data) => { this.setState({ messages: data }) });
  }
  render () {
    return (
      <React.Fragment>
        <div style = {{padding:"1%"}}>
        <CreateMessage />
        <Header as='h3' dividing>
         My Message
        </Header>
        <AllMessages messages = { this.state.messages} />
        </div>
      </React.Fragment>
    );
  }
}

export default MessageShow
