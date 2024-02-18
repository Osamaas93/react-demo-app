import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFavourites } from "../../contexts/FavouritesContext";
import CourseDescription from "./CourseDescription";
import DetailsCard from "./DetailsCard";
import CourseSubTopics from "./CourseSubTopics";
import styled from "styled-components";
import axios from "axios";

const CourseDetailes = styled.section`
  padding: 30px 0px;
  background-color: #333333;
`;

const DetailesContainer = styled.div`
  width: 60%;
  margin: auto;
  padding-right: calc(350px + 10px);
  box-sizing: border-box;
  position: relative;
`;

export function DetailsPage() {
  const { id } = useParams();
  const [topic, setTopic] = useState(null);
  const { isFavItem, addToFavItems, removeFromFavItems } = useFavourites();
  const [isFavTopic, setIsFavTopic] = useState(false);
  useEffect(() => {
    setIsFavTopic(isFavItem(id));
  }, [isFavItem, id]);

  useEffect(() => {
    const baseURL = `https://tap-web-1.herokuapp.com/topics/details/${id}`;
    axios.get(baseURL).then((response) => {
      setTopic(response.data);
    });
  }, [id]);

  function toggleFavItem() {
    if (isFavTopic) {
      removeFromFavItems(topic.id);
    } else {
      addToFavItems(topic);
    }
  }

  return (
    <>
      {topic ? (
        <>
          <CourseDetailes>
            <DetailesContainer>
              <CourseDescription
                key={topic.id}
                id={topic.id}
                category={topic.category}
                topic={topic.topic}
                rating={topic.rating}
                description={topic.description}
              />

              <DetailsCard
                toggleFavItem={toggleFavItem}
                isFavTopic={isFavTopic}
                topic={topic.topic}
                author={topic.name}
                image={topic.image}
              />
            </DetailesContainer>
          </CourseDetailes>
          <CourseSubTopics subtopics={topic.subtopics} topic={topic.topic} />
        </>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}
