import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { HOME_URL, SIGNUP_URL } from "./RoutingApi"
export class Login extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     email: null,
  //     pass: null
  //   }
  // }
  loginUser() {
    let email = document.getElementById('email').value 
    let pass = document.getElementById('pass').value
    let token = document.head.querySelector("[name=csrf-token]").content
    let body = JSON.stringify({ user : {email: email, password: pass} })
    fetch('http://localhost:3000/../../users/sign_in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': token
      },
      body: body,
    }).then((response) => {
       console.log("first then")
       window.location.href = HOME_URL
       return response.json() })
      .then((user) => {
        console.log('here')
      })
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
              <Form.Input id="email" fluid icon='user' iconPosition='left' placeholder='E-mail address' />
              <Form.Input id="pass"
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
