import React from "react";
import "./featuredMovie.scss";
export default ({ item }) => {
  let airDate = new Date(item.first_air_date);
  let average = item.vote_average;
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <h1 className="featured-name">{item.original_name}</h1>
          <div className="featured--info">
            <div className="points">{average.toFixed(2)} pontos</div>
            <div className="year">{airDate.getFullYear()}</div>
            <div className="season">
              {item.number_of_seasons} Temporada
              {item.number_of_seasons !== 1 ? "s" : ""}
            </div>
          </div>
          <div className="featured-overview">
            {item.overview}
            {item.overview === "" ? "Sem sinopse" : ""}
          </div>
          <div className="featured--buttons">
            <a href={`/watch/${item.id}`} className="wacthButton">
              ► Assitir
            </a>
            <a href={`/list/add/${item.id}`} className="addButton">
              {" "}
              + Minha lista
            </a>
          </div>
          <div className="featured--genres">
            <strong>Generos:</strong> <strong>{genres.join(`, `)}</strong>
          </div>
        </div>
      </div>
    </section>
  );
};
