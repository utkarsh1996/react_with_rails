import React from "react"
import PropTypes from "prop-types"
import { Navbar } from "./Navbar"
import { AllMessages } from "./AllMessages"
const Index = (props) => {
    console.log("here");
    return (
      <React.Fragment>
        <Navbar />
        <AllMessages />
      </React.Fragment>
    );
}

export default Index
