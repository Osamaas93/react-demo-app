import { Link } from "react-router-dom";
import styled from "styled-components";

const InternalCard = styled.div`
  position: absolute;
  width: 330px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #ffffff;
  top: 0;
  right: 0;
  z-index: 1;
`;

const CourseCardImage = styled.div`
  img {
    width: 100%;
    height: 210px;
  }
`;

const InternalContent = styled.div`
  padding: 20px;
`;

const AddToFavourites = styled.div`
  border: 0.4mm solid #dddddd;
  padding: 25px 20px 10px 20px;

  button {
    display: flex;
    background-color: var(--brandSecondary);
    border: 0;
    padding: 15px 20px;
    color: #f0f9ff;
    font-size: 20px;
    margin: 10px 0px;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    z-index: 2;
  }
  h6 {
    margin-top: 10px;
    margin-bottom: 0%;
    font-size: 0.8rem;
    color: #aba7a7;
    text-align: center;
  }
`;

const Subtitle2 = styled.h4`
  font-size: 1.2em;
  margin-bottom: 10px;
  margin: 0%;
  color: #333333;
  font-size: 0.9rem;

  a {
    color: #0768ac;
  }
`;

const Subtitle2Paragraph = styled.p`
  color: #282828;
  margin: 0%;
  font-size: 1rem;
  font-weight: 500;
`;

const HeartIcon = styled("ion-icon")`
  flex-shrink: 0;
  font-size: 1.8rem;
`;

export default function DetailsCard({
  toggleFavItem,
  isFavTopic,
  topic,
  author,
  image,
}) {
  return (
    <InternalCard>
      <CourseCardImage>
        <img src={"../assets/images/" + image} alt={topic} />
      </CourseCardImage>

      <InternalContent>
        <Subtitle2>
          {topic} by <Link to="">{author}</Link>
        </Subtitle2>
        <AddToFavourites>
          <Subtitle2Paragraph>Interested about this topic?</Subtitle2Paragraph>
          <button onClick={toggleFavItem}>
            {isFavTopic ? "Remove From Favourites" : "Add To Favourites"}
            {isFavTopic ? (
              <HeartIcon name="heart"></HeartIcon>
            ) : (
              <HeartIcon name="heart-outline"></HeartIcon>
            )}
          </button>
          <h6>Unlimited Credits</h6>
        </AddToFavourites>
      </InternalContent>
    </InternalCard>
  );
}
