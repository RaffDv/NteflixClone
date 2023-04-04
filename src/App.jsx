import "./app.scss";
import "./Tmdb";
import React, { useEffect, useState } from "react";

import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow/index";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setblackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.GetHomeList();
      setMovieList(list);

      let originals = list.filter((movie) => {
        return movie.slug === "originals";
      });

      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );

      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.GetMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo);
    };
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListner = () => {
      if (window.scrollY > 10) {
        setblackHeader(true);
      } else {
        setblackHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListner);

    return () => {
      window.removeEventListener("scroll", scrollListner);
    };
  }, []);
  return (
    <div className="page">
      <Header black={blackHeader} />
      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <section>
        <footer>
          Feito com{" "}
          <span role="img" aria-label="coracao">
            ❤️
          </span>{" "}
          por Raff <br />
          Direitos de imagem a NetFlix <br />
          Dados pegos do site The Movie DB
        </footer>
      </section>
    </div>
  );
}

export default App;
