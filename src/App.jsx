import { useEffect, useState } from "react";
import "./App.css";
import { NavigationComponent } from "./components/NavigationComponent";
import { SearchComponent } from "./components/SearchComponent";
import { AnimeComponent } from "./components/AnimeComponent";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { ContactsPage } from "./pages/ContactsPage";
 
function App() {
  const [animeArray, setAnimeArray] = useState([]);
  const [searchAnime, setSearchAnime] = useState("");

  useEffect(() => {
    axios.get(`https://api.jikan.moe/v4/anime`).then((resp) => {
      console.log("click");

      setAnimeArray(resp.data.data);
    });
  },[]);

  function handleSearch() {
    axios
      .get(`https://api.jikan.moe/v4/anime?q=${searchAnime}`)
      .then((resp) => {
        setAnimeArray(resp.data.data);
      });
  }

  return (
    <>
      <NavigationComponent></NavigationComponent>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchComponent
                searchAnime={searchAnime}
                setSearchAnime={setSearchAnime}
                handleSearch={handleSearch}
              ></SearchComponent>
              <AnimeComponent data={animeArray}></AnimeComponent>
            </>
          }
        ></Route>
        <Route path="/about" element={<AboutPage></AboutPage>}></Route>
        <Route path="/contacts" element={<ContactsPage></ContactsPage>}></Route>
      </Routes>
    </>
  );
}

export default App;
