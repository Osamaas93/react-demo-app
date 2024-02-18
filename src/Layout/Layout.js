import { Outlet } from "react-router-dom";
import Footer from "./Footer";

import Header from "./Header";
import { useFavourites } from "../contexts/FavouritesContext";
import FavouritesContainer from "../containers/favourites/FavouritesContainer";
import { createContext, useState } from "react";
import styled from "styled-components";

const StyledBody = styled.div`
  background: var(--bgBody);
`;

export const ThemeContext = createContext(null);

export function Layout() {
  const [theme, setTheme] = useState("lightTheme");

  function toggleTheme() {
    setTheme((curr) => (curr === "lightTheme" ? "darkTheme" : "lightTheme"));
  }

  const { isFavOpen } = useFavourites();
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {" "}
      <StyledBody id={theme}>
        <Header theme={theme} toggleTheme={toggleTheme} />
  
        <main>
          <Outlet />
          {isFavOpen && <FavouritesContainer />}
        </main>
        <Footer />
      </StyledBody>
    </ThemeContext.Provider>
  );
}
