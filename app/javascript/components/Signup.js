import React, { useState } from "react"
import PropTypes from "prop-types"
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { HOME_URL } from "./RoutingApi"
export class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: null,
      pass: null,
      name: null,
      phone: null,
      pass_confirm: null
    }
    this.formClick = this.formClick.bind(this)
  }
  formClick = () => {
    this.state.email = document.getElementById('email').value
    this.state.pass = document.getElementById('pass').value
    this.state.name = document.getElementById('name').value
    this.state.phone = document.getElementById('phone').value
    this.state.pass_confirm = document.getElementById('pass_confirm').value;
    console.log(this.state.email, this.state.pass)
    let token = document.head.querySelector("[name=csrf-token]").content
    let body = JSON.stringify({ user : {name: this.state.name,email: this.state.email,phone: this.state.phone, password: this.state.pass, password_confirmation: this.state.pass_confirm} })
    fetch('http://localhost:3000/../../users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': token
      },
      body: body,
    }).then((response) => { 
      window.location = HOME_URL
      return response.json() })
      .then((user) => {
        console.log("error")
      })
  }
  render() {
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            Signup to your account
      </Header>
          {/* <Form size='large' onSubmit={(e) => { this.handleSignUp }}> */}
          {/* method="post" action="../../users" */}
          <Form size='large'>
            <Segment stacked>
              <Form.Input id="name" fluid icon='user' iconPosition='left' placeholder='Name' />
              <Form.Input id="email" fluid icon='user' iconPosition='left' placeholder='Email Id' />
              <Form.Input id="phone" fluid icon='user' iconPosition='left' placeholder='Phone Number' />
              <Form.Input id="pass"
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />
              <Form.Input id="pass_confirm"
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Confirm Password'
                type='password'
              />

              <Button color='teal' fluid size='large' onClick={this.formClick}>
                Signup
          </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Signup
