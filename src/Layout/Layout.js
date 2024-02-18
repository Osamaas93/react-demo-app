import { Outlet } from "react-router-dom";
import Footer from "./Footer";

import Header from "./Header";
import { useFavourites } from "../contexts/FavouritesContext";
import FavouritesContainer from "../containers/favourites/FavouritesContainer";
import { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export function Layout() {
  const { isFavOpen } = useFavourites();
  const THEME_key = "app_theme";
  const { getItem, setItem } = useLocalStorage();

  const [theme, setTheme] = useState(getItem(THEME_key, "lightTheme"));

  useEffect(() => {
    setItem(THEME_key, theme);
  }, [setItem, theme]);

  return (
    <div className={`${theme}`}>
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <Outlet />
        {isFavOpen && <FavouritesContainer />}
      </main>
      <Footer />
    </div>
  );
}
