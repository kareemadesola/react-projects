import React, { useState } from "react";

const Tour = ({ id, name, info, image, price }) => {
  return (
    <article key={id} className="single-tour">
      <img src={image} alt={name} />
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      <p>{info}</p>
      <button className="delete-btn">not interested</button>
    </article>
  );
};

export default Tour;
