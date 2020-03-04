import React, { useState } from "react"
import PropTypes from "prop-types"
import { Navbar } from "./Navbar"
import { MessageShow } from "./MessageShow"
const Index = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <MessageShow />
    </React.Fragment>
  );
}
export default Index
