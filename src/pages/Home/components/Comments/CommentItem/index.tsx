import React from 'react'
import { StyledCommentItem } from './style'

interface Props {
  image: string
  comment: string
  name: string
}

const CommentItem: React.FC<Props> = ({ image, comment, name }) => {
  return (
    <StyledCommentItem>
      <div className="wrapper_image">
        <img src={image} alt=""/>
      </div>
      <div className="content">
        <p>{comment}</p>
        <div className="person_name">
          <span></span><small>{name}</small>
        </div>
      </div>
    </StyledCommentItem>
  )
}

export default CommentItem
