import { Link } from "react-router-dom";
import styled from "styled-components";
import TrimmedText from "./TrimmedText";
import RatingStars from "./RatingStars";

const StyledCard = styled(Link)`
  color: inherit;
  text-decoration: none;
  background: var(--bgDefault);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.3);
`;

const CardImage = styled.img`
  width: 100%;
  height: 130px;
  object-fit: cover;
`;

const CardCategory = styled.h2`
  font-size: 0.8rem;
  font-weight: 200;
  color: var(--bodyText);
`;
const CardTopic = styled.h3`
  font-size: 0.9rem;
  flex-grow: 1;
  color: var(--bodyText);
  margin-bottom: 12px;
`;

const CardAuthor = styled.div`
  font-size: 0.85rem;
  opacity: 0.5;
  color: var(--bodyText);
  padding-top: 8px;
`;
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardBody = styled.div`
  padding: 1rem;
  height: 130px;
  display: flex;
  flex-direction: column;
`;

export default function TopicCard({
  id,
  image,
  topic,
  category,
  rating,
  author,
}) {
  return (
    <StyledCard to={`/details/${id}`}>
      <CardContent>
        <CardImage
          src={`${process.env.PUBLIC_URL}/assets/images/${image}`}
          alt={topic}
        />
        <CardBody>
          <CardCategory>
            <TrimmedText maxLines={1}>{category}</TrimmedText>
          </CardCategory>
          <CardTopic>
            <TrimmedText maxLines={2}>{topic}</TrimmedText>
          </CardTopic>
          <RatingStars rating={rating} />
          <CardAuthor>Author: {author}</CardAuthor>
        </CardBody>
      </CardContent>
    </StyledCard>
  );
}
