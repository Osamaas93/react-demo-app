import styled from "styled-components";
import { Container } from "../../Layout/Container";
import { useFavourites } from "../../contexts/FavouritesContext";
import FavouritesCards from "../../components/FavoutiresCard";

const MyFavTopicsHeader = styled.h2`
  font-size: 1rem;
  color: var(--bodyText);
  margin-top: 16px;
  font-weight: 700;
`;

const FavouritesCourses = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  gap: 40px;
  margin-block: 16px;
`;

const FavouritesArea = styled.div`
  width: 100%;
  height: auto;
  background-color: var(--bgDefault);
  position: fixed;
  bottom: 0;
  z-index: 2;
`;

export default function FavouritesContainer() {
  const { favItems } = useFavourites();
  return (
    <FavouritesArea>
      <Container>
        <MyFavTopicsHeader>My Favourite Topics</MyFavTopicsHeader>
        <FavouritesCourses>
          {favItems.map((item) => (
            <FavouritesCards
              id={item.id}
              image={item.image}
              topic={item.topic}
              rating={item.rating}
            />
          ))}
        </FavouritesCourses>
      </Container>
    </FavouritesArea>
  );
}
