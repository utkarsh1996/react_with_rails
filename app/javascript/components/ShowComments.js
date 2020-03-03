import React from "react"
import PropTypes from "prop-types"
import { Comment} from "semantic-ui-react"
export const ShowComments = (props) => {
  var comments = props.comments.map((comment) => {
    if(comment.message_id == props.message.id) {
      return (
        <Comment>
               <Comment.Author>Author Name</Comment.Author>
               <Comment.Text>{comment.comment}</Comment.Text>
             </Comment>
   )
    }
  })
  return (
    <div>
      {comments}
    </div>
    
  )
}

export default ShowComments
