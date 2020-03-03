import React from "react"
import PropTypes from "prop-types"
import { Table} from "semantic-ui-react"
import { Navbar } from "./Navbar"
class Profile extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Table celled striped collapsing color={'blue'}>
          {/* <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email Id</Table.HeaderCell>
              <Table.HeaderCell>Phone Number</Table.HeaderCell>
            </Table.Row>
          </Table.Header> */}
          <Table.Body>
            <Table.Row>
              <Table.Cell>Name</Table.Cell>
              <Table.Cell>Test Name</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Email Id</Table.Cell>
              <Table.Cell>testmail@gmail.com</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Phone Number</Table.Cell>
              <Table.Cell>98765XXXXX</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </React.Fragment>
    );
  }
}

export default Profile
