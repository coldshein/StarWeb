import { HashRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { CharactersCatalog } from "./pages/CharactersCatalog";
import { CharacterDetails } from "./pages/CharacterDetails";
import { HomePage } from "./pages/HomePage";

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters-catalog" element={<CharactersCatalog />}/>
          <Route path="/characters-catalog/:id" element={<CharacterDetails />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
