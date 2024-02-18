import { Link } from "react-router-dom";
import styled from "styled-components";
import RatingStars from "./RatingStars";
import TrimmedText from "./TrimmedText";

const FavouritesImage = styled.img`
  height: 62px;
  width: 100%;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;
const CourseContent = styled.div`
  max-height: 40px;
  padding-inline: 0.45rem;
  margin-bottom: 0.6rem;
`;

const StyledFavouriteItem = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  width: 120px;
  border-radius: 5px;
  background-color: var(--bgDefault);
  box-shadow: 0 3px 5px var(--linesColor);
  color: var(--bodyText);
`;
const CourseTitle = styled.h3`
  font-size: 0.9rem;
`;

export default function FavouritesCards({ id, image, topic, rating }) {
  return (
    <StyledFavouriteItem to={`/details/${id}`} key={id}>
      <FavouritesImage src={"../assets/images/" + image} alt={topic} />
      <CourseContent>
        <CourseTitle>
          {" "}
          <TrimmedText maxLines={1}>{topic} </TrimmedText>
        </CourseTitle>
        <RatingStars rating={rating} />
      </CourseContent>
    </StyledFavouriteItem>
  );
}
