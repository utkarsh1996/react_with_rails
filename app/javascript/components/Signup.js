import React, { useState } from "react"
import PropTypes from "prop-types"
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
export class Signup extends React.Component {
  render() {
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            Signup to your account
      </Header>
          {/* <Form size='large' onSubmit={(e) => { this.handleSignUp }}> */}
          <Form size='large' method="post" action="../../users">
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='Name' />
              <Form.Input fluid icon='user' iconPosition='left' placeholder='Email Id' />
              <Form.Input fluid icon='user' iconPosition='left' placeholder='Phone Number' />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Confirm Password'
                type='password'
              />

              <Button color='teal' fluid size='large'>
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
