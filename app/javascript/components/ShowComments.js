import React from "react"
import PropTypes from "prop-types"
export const ShowComments = (props) => {
  var comments = props.comments.map((comment) => {
    return (
      <Comment>
                <Comment.Author>Author Name</Comment.Author>
                <Comment.Text>{comment.comment}</Comment.Text>
              </Comment>
    )
  })
  return (
    {comments}
  )
}

export default ShowComments
