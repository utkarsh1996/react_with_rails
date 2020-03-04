import React from "react"
import PropTypes from "prop-types"
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { HOME_URL, SIGNUP_URL } from "./RoutingApi"
export class Login extends React.Component {
  loginUser() {
    window.location = HOME_URL
  }
  render() {
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            Log-in to your account
      </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />

              <Button color='teal' fluid size='large' onClick={this.loginUser}>
                Login
          </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href={SIGNUP_URL}>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Login
