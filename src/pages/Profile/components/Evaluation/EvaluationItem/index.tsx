import React from 'react'
import StarRatingComponent from 'react-star-rating-component'
import { DivEvaluation, Flex, Image, DivComment, Comment, Name, DivImage } from './style'

interface Props {
  image: string
  evaluation: number
  content: string
  name: string
}

const EvaluationItem: React.FC<Props> = ({ image, evaluation, content, name }) => {
  return (
    <DivEvaluation>
      <Flex>
        <DivImage>
          <Image image={image}></Image>
          <Name>{name}</Name>
        </DivImage>
        <DivComment>
          <Comment>{content}</Comment>
          <StarRatingComponent
            name="evaluationOne"
            editing={false}
            starCount={5}
            value={evaluation / 2}
            starColor="#FF6D00"
          />
        </DivComment>
      </Flex>
    </DivEvaluation>
  )
}

export default EvaluationItem
