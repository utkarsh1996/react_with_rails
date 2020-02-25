import React from "react"
import PropTypes from "prop-types"
import { Menu } from "semantic-ui-react"
export class Navbar extends React.Component {
  render () {
    var activeItem = 'Home'
    return (
      <Menu pointing secondary>
      <Menu.Item
        name='Home'
        active={activeItem === 'Home'}
        onClick={this.handleItemClick}
      />  
      <Menu.Item
        name='Profile'
        active={activeItem === 'Profile'}
        onClick={this.handleItemClick}
      />
      <Menu.Item
        name='All Messages'
        active={activeItem === 'All Messages'}
        onClick={this.handleItemClick}
      /> 
      <Menu.Menu position='right'>
        <Menu.Item
          name='Logout'
          active={activeItem === 'Logout'}
          onClick={this.handleItemClick}
        />
      </Menu.Menu>
    </Menu>
    );
  }
}

export default Navbar
