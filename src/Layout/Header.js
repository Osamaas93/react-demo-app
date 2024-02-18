import styled from "styled-components";
import { Container } from "./Container";
import Button from "../components/Button";
import { useFavourites } from "../contexts/FavouritesContext";
import HeaderDesign from "./HeaderDesign";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  background: var(--bgDefault);
  padding-top: 1.3rem;
  box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.3);
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
`;

const HeaderTitle = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: var(--brandPrimary);
  font-size: 1rem;
  font-weight: 400;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 4px;
`;

export default function Header({ theme, setTheme }) {
  const { toggleIsFavOpen } = useFavourites();

  return (
    <StyledHeader>
      <Container>
        <HeaderContent>
          <HeaderTitle to="/">Web Topics</HeaderTitle>
          <StyledNav>
            <Button
              onClick={() =>
                setTheme((curr) =>
                  curr === "lightTheme" ? "darkTheme" : "lightTheme"
                )
              }
              icon={theme === "darkTheme" ? "sunny-outline" : "moon-outline"}
            >
              {theme === "darkTheme" ? "Light Mode " : "Dark Mode"}
            </Button>
            <Button icon="heart-outline" onClick={toggleIsFavOpen}>
              Favourites
            </Button>
          </StyledNav>
        </HeaderContent>
      </Container>
      <HeaderDesign />
    </StyledHeader>
  );
}
