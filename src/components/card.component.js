import React from "react";

const Card = (response) => {
  return (
    <div className="display-weather">
      <div className="main-card">
        <span className="card-title">{response.data}</span>
      </div>
    </div>
  );
};
export default Card;
