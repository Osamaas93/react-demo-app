import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./containers/home/HomePage";
import { Layout } from "./Layout/Layout";
import { DetailsPage } from "./containers/details/DetailsPage";
import FavouritesProvider from "./contexts/FavouritesContext";

function App() {
  return (
    <FavouritesProvider>
      <BrowserRouter basename="/react-demo-app">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FavouritesProvider>
  );
}

export default App;
