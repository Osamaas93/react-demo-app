import styled from "styled-components";
import RatingStars from "../../components/RatingStars";

const StyledCategory = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: var(--brandSecondary);
  margin: 0%;
`;
const StyledTopicAndDescription = styled.div`
  color: #ffffff;
  margin: 0%;
`;

const StyledDescription = styled(StyledTopicAndDescription)`
  font-size: 1.1rem;
  padding-top: 20px;
`;

const StyledTopic = styled(StyledTopicAndDescription)`
  font-size: 1.4rem;
`;

export default function CourseDescription({
  category,
  topic,
  rating,
  description,
}) {
  return (
    <article className="aboutCourse">
      <StyledCategory>{category}</StyledCategory>
      <StyledTopic>{topic}</StyledTopic>
      <RatingStars rating={rating} />
      <StyledDescription>{description}</StyledDescription>
    </article>
  );
}
