import React, { useState } from "react";
import "./MovieRow.scss";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export default function MovieRow({ title, items }) {
  const handleLeftArrow = () => {};
  const handleRightArrow = () => {};

  const [scrollX, setScrollX] = useState(0);
  return (
    <div className="MovieRow">
      <h2>{title}</h2>
      <div
        className="MovieRow--left"
        onClick={handleLeftArrow}
        style={{
          marginLeft: scrollX,
          width: items.results.length * 150,
        }}
      >
        <ArrowBackIosIcon
          style={{
            fontSize: 50,
          }}
        />
      </div>
      <div
        className="MovieRow--right "
        onClick={handleRightArrow}
        style={{ marginLeft: scrollX }}
      >
        <ArrowForwardIosIcon style={{ fontSize: 50 }} />
      </div>

      <div className="MovieRow--listarea">
        <div className="MovieRow--list">
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
