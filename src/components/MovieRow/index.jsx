import React from "react";
import "./movieRow.scss";

export default function MovieRow({ title, items }) {
  return (
    <div>
      {`${title} `} <br />
      {`${JSON.stringify(items.results.map((item) => item.id))}`}
    </div>
  );
}
