import React, {useState} from "react"
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
// function Index() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <p>you clicked {count} times</p>
//       <button onClick={()=> setCount(count + 1)}>Click me</button>
//     </div>
//   )
// }
export default Index
