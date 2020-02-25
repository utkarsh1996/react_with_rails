import React from "react"
import PropTypes from "prop-types"
import { Navbar } from "./Navbar"
import { MessageShow } from "./MessageShow"
const Index = (props) => {
    console.log("here");
    return (
      <React.Fragment>
        <Navbar />
        <MessageShow />
      </React.Fragment>
    );
}

export default Index
