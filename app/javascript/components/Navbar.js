import React from "react"
import PropTypes from "prop-types"
import { Menu } from "semantic-ui-react"
export class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeItem: 'Home'
    }
  }
  handleItemClick = () => {
    console.log("enter click")
  }
  render () {
    return (
      <Menu pointing secondary>
      <Menu.Item
        name='Home'
        active={this.state.activeItem === 'Home'}
        onClick={this.handleItemClick}
      />  
      <Menu.Item
        name='Profile'
        active={this.state.activeItem === 'Profile'}
        onClick={this.handleItemClick}
      />
      <Menu.Menu position='right'>
        <Menu.Item
          name='Logout'
          active={this.state.activeItem === 'Logout'}
          onClick={this.handleItemClick}
        />
      </Menu.Menu>
    </Menu>
    );
  }
}

export default Navbar
