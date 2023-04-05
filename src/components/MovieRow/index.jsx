import React, { useState } from "react";
import "./MovieRow.scss";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export default function MovieRow({ title, items }) {
  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };

  const [scrollX, setScrollX] = useState(0);
  return (
    <div className="MovieRow">
      <h2>{title}</h2>
      <div className="MovieRow--left" onClick={handleLeftArrow}>
        <ArrowBackIosIcon
          style={{
            fontSize: 50,
          }}
        />
      </div>
      <div className="MovieRow--right " onClick={handleRightArrow}>
        <ArrowForwardIosIcon style={{ fontSize: 50 }} />
      </div>

      <div className="MovieRow--listarea">
        <div
          className="MovieRow--list"
          style={{ width: items.results.length * 150, marginLeft: scrollX }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div className="item">
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={items.orginal_title}
                  key={key}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
