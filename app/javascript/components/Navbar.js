import React from "react"
import PropTypes from "prop-types"
import { Menu } from "semantic-ui-react"
import { PROFILE_URL, HOME_URL } from "./RoutingApi"
export class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeItem: 'Home'
    }
  }
  handleItemClick = (name) => {
    if(name==='Home') {
      window.location = HOME_URL
    }
    else if(name==='Profile') {
      window.location = PROFILE_URL
    }
  }
  handleLogOut = () => {
    let token = document.head.querySelector("[name=csrf-token]").content
    fetch('http://localhost:3000/../../users/sign_out', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': token
      },
    }).then((response) => { 
      window.location = HOME_URL
      return response.json() })
      .then((user) => {
        window.location = HOME_URL
      })
  }
  render() {
    return (
      <Menu pointing secondary>
        <Menu.Item
          name='Home'
          // active={this.state.activeItem === 'Home'}
          onClick={() => this.handleItemClick('Home')}
        />
        <Menu.Item
          name='Profile'
          // active={this.state.activeItem === 'Profile'}
          onClick={() => this.handleItemClick('Profile')}
        />
        <Menu.Menu position='right'>
          <Menu.Item
            name='Logout'
            // active={this.state.activeItem === 'Logout'}
            onClick={this.handleLogOut}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Navbar
